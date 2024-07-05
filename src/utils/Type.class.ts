export abstract class Field {
  public value: any;
  constructor(value: any) {
    this.value = value;
  }
  abstract add(b: Field): Field;
  abstract sub(b: Field): Field;
  abstract mul(b: Field): Field;
  abstract div(b: Field): Field;
  abstract abs(): Field;
  abstract neg(): Field;
  abstract sqrt(): Field;
  abstract trim(): Field;
  abstract conjugate(): Field;
  abstract get isZero(): boolean;
  abstract get isOne(): boolean;
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
  get isOne() {
    return this.value === 1;
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
  abs() {
    return new R(this.value >= 0 ? this.value : -this.value);
  }
  neg() {
    return new R(-this.value);
  }
  sqrt() {
    return new R(this.value ** 0.5);
  }
  trim() {
    return new R(parseFloat(this.value.toFixed(10)));
  }
  conjugate() {
    return new R(this.value);
  }
}

// Complex number C
// Expected format: "2 + 3i"
export class C extends Field {
  public n: number;
  public i: number;

  constructor(value?: string) {
    super(value);
    this.n = 0;
    this.i = 0;
    this.parse(value || "0");
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
  get isOne() {
    return this.n === 1 && this.i === 0;
  }
  public update() {
    if (this.n === -0) this.n = 0;
    if (this.i === -0) this.i = 0;

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
    const result = new C();
    result.n = this.n + b.n;
    result.i = this.i + b.i;

    result.update();
    return result;
  }
  sub(b: C) {
    const result = new C();
    result.n = this.n - b.n;
    result.i = this.i - b.i;

    result.update();
    return result;
  }
  mul(b: C) {
    const result = new C();
    result.n = this.n * b.n - this.i * b.i;
    result.i = this.n * b.i + this.i * b.n;

    result.update();
    return result;
  }
  div(b: C) {
    const result = new C();
    result.n = (this.n * b.n + this.i * b.i) / (b.n * b.n + b.i * b.i);
    result.i = (this.i * b.n - this.n * b.i) / (b.n * b.n + b.i * b.i);
    result.update();
    return result;
  }
  abs() {
    return new C(Math.pow(this.n * this.n + this.i * this.i, 0.5).toString());
  }
  neg() {
    const result = new C();
    result.n = -this.n;
    result.i = -this.i;
    result.update();
    return result;
  }
  sqrt() {
    const result = new C();
    const magnitude = Math.pow(this.n * this.n + this.i * this.i, 0.5);
    const angle = Math.atan2(this.i, this.n);
    const sqrtMagnitude = Math.pow(magnitude, 0.5);
    const sqrtAngle = angle / 2;
    result.n = sqrtMagnitude * Math.cos(sqrtAngle);
    result.i = sqrtMagnitude * Math.sin(sqrtAngle);
    result.update();
    return result;
  }
  trim() {
    const c = new C();
    c.n = parseFloat(this.n.toFixed(10));
    c.i = parseFloat(this.i.toFixed(10));
    c.update();
    return c;
  }
  conjugate(): Field {
    const c = new C();
    c.n = this.n;
    c.i = -this.i;
    c.update();
    return c;
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
