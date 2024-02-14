import { inspect } from "util";

export class Vector {
  private value: number[];
  private size: number;

  constructor(value: number[]) {
    this.value = [...value];
    this.size = this.value.length;
  }

  static from<K>(value: number[]): Vector {
    return new Vector(value);
  }

  // Override the default toString() method
  [inspect.custom]() {
    return this.value;
  }

  public add(v: Vector) {
    if (this.size !== v.size) {
      throw new Error("Vector sizes do not match");
    }
    this.value.forEach((el, idx) => {
      this.value[idx] = el + v.value[idx];
    });
    return this;
  }

  public sub(v: Vector) {
    if (this.size !== v.size) {
      throw new Error("Vector sizes do not match");
    }
    this.value.forEach((el, idx) => {
      this.value[idx] = el - v.value[idx];
    });
    return this;
  }

  public scl(n: number) {
    this.value.forEach((el, idx) => {
      this.value[idx] = el * n;
    });
    return this;
  }
}
