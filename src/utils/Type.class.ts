export abstract class Field {
  public value: any;
  constructor(value: any) {
    this.value = value;
  }
  abstract add(b: Field): Field;
  abstract sub(b: Field): Field;
  abstract mul(b: Field): Field;
}

// Real number K
export class K extends Field {
  constructor(value: number) {
    super(value);
  }
  static from(value: number) {
    return new K(value);
  }
  static map(value: number[]) {
    return value.map((el) => new K(el));
  }

  add(b: K) {
    return new K(this.value + b.value);
  }
  sub(b: K) {
    return new K(this.value - b.value);
  }
  mul(b: K) {
    return new K(this.value * b.value);
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

  add(b: C) {
    const result = new C("");
    result.n = this.n + b.n;
    result.i = this.i + b.i;
    return result;
  }
  sub(b: C) {
    const result = new C("");
    result.n = this.n - b.n;
    result.i = this.i - b.i;
    return result;
  }
  mul(b: C) {
    const result = new C("");
    result.n = this.n * b.n - this.i * b.i;
    result.i = this.n * b.i + this.i * b.n;
    return result;
  }
  from(value: string) {
    return new C(value);
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
  }
}
