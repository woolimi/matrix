export abstract class Field {
  public value: any;
  constructor(value: any) {
    this.value = value;
  }
  abstract add(b: Field): Field;
  abstract sub(b: Field): Field;
  abstract mul(b: Field): Field;
  abstract div(b: Field): Field;
  abstract scl(b: number): Field;
  abstract abs(): Field;
  abstract get isZero(): boolean;
  apply(c: Function): Field {
    this.value = c(this.value);
    return this;
  }
}

// Real number R
export class R extends Field {
  constructor(value: number) {
    super(value || 0);
  }
  static from(value: number) {
    return new R(value);
  }
  static map(value: number[]) {
    return value.map((el) => new R(el));
  }
  static map2(value: number[][]) {
    return value.map((el) => el.map((el) => new R(el)));
  }

  get isZero() {
    return this.value === 0;
  }
  add(b: R) {
    return new R(this.value + b.value);
  }
  sub(b: R) {
    return new R(this.value - b.value);
  }
  mul(b: R) {
    return new R(this.value * b.value);
  }
  div(b: R) {
    if (b.value === 0) throw new Error("Division by zero");
    const res = this.value / b.value;
    if (res === -0) return new R(0);
    return new R(res);
  }
  scl(b: number) {
    return new R(this.value * b);
  }
  abs() {
    return new R(this.value >= 0 ? this.value : -this.value);
  }
}

// Complex number C
// Expected format: "2 + 3i"
export class C extends Field {
  public n: number;
  public i: number;

  constructor(value: string) {
    super(value);
    this.n = 0;
    this.i = 0;
    this.parse(value);
  }
  static from(value: string) {
    return new C(value);
  }
  static map(value: string[]) {
    return value.map((el) => new C(el));
  }
  static map2(value: string[][]) {
    return value.map((el) => el.map((el) => new C(el)));
  }
  get isZero() {
    return this.n === 0 && this.i === 0;
  }
  public update() {
    if (!this.n && !this.i) {
      this.value = "0";
    } else if (!this.i) {
      this.value = `${this.n}`;
    } else if (!this.n) {
      this.value = `${this.i}i`;
    } else if (this.i === 1) {
      this.value = `${this.n} + i`;
    } else if (this.i === -1) {
      this.value = `${this.n} - i`;
    } else if (this.i < 0) {
      this.value = `${this.n} - ${-this.i}i`;
    } else {
      this.value = `${this.n} + ${this.i}i`;
    }
  }

  add(b: C) {
    const result = new C("");
    result.n = this.n + b.n;
    result.i = this.i + b.i;

    result.update();
    return result;
  }
  sub(b: C) {
    const result = new C("");
    result.n = this.n - b.n;
    result.i = this.i - b.i;

    result.update();
    return result;
  }
  mul(b: C) {
    const result = new C("");
    result.n = this.n * b.n - this.i * b.i;
    result.i = this.n * b.i + this.i * b.n;

    result.update();
    return result;
  }
  div(b: C) {
    const result = new C("");
    result.n = (this.n * b.n + this.i * b.i) / (b.n * b.n + b.i * b.i);
    result.i = (this.i * b.n - this.n * b.i) / (b.n * b.n + b.i * b.i);
    result.update();
    return result;
  }
  scl(b: number) {
    const result = new C("");
    result.n = this.n * b;
    result.i = this.i * b;

    result.update();
    return result;
  }

  abs(): Field {
    return new R(Math.sqrt(this.n * this.n + this.i * this.i));
  }
  parse(formula: string) {
    // Tokenize: "2-3i" => ["2", "-3i"]
    const tokens = formula
      .replace(/\s/g, "")
      .split(/(?=[+-](?=\d*\.?\d|(?=\d*\.?\d*i)))/)
      .map((token) => token.replace(/^\+i$/, "1i").replace(/^-i$/, "-1i").replace(/^i$/, "1i"));

    // Validate & Assign
    tokens.forEach((token) => {
      if (!token.match(/^([-+]?(\d*\.?\d*|\d*\.?\d*i))$/)) {
        throw new Error(`Invalid complex number: '${formula}'`);
      }
      if (token.at(-1) === "i") {
        this.i += parseFloat(token);
      } else {
        this.n += parseFloat(token);
      }
    });

    this.update();
  }
}
