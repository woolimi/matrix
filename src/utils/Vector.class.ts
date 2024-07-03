import { inspect } from "util";
import type { Field } from "./Type.class";

export class Vector<T extends Field> {
  public value: T[];

  constructor(value: T[]) {
    this.value = value;
  }

  static from(value: Field[]): Vector<Field> {
    return new Vector(value);
  }

  get size(): number {
    return this.value.length;
  }

  // Override the default toString() method
  [inspect.custom]() {
    return this.value;
  }

  public add(v: Vector<T>): Vector<Field> {
    if (this.size !== v.size) {
      throw new Error("Vector sizes do not match");
    }
    return Vector.from(this.value.map((el, idx) => el.add(v.value[idx])));
  }

  public sub(v: Vector<T>): Vector<Field> {
    if (this.size !== v.size) {
      throw new Error("Vector sizes do not match");
    }
    return Vector.from(this.value.map((el, idx) => el.sub(v.value[idx])));
  }

  public scl(n: Field): Vector<Field> {
    return Vector.from(this.value.map((el) => el.mul(n)));
  }

  public dot(v: Vector<T>): Field {
    if (this.size !== v.size) {
      throw new Error("Vector sizes do not match");
    }
    return this.value.map((el, idx) => el.mul(v.value[idx])).reduce((a, b) => a.add(b));
  }

  public norm_1(): Field {
    // Add the absolute value of each element
    return this.value.map((el) => el.abs()).reduce((a, b) => a.add(b));
  }
  public norm(): Field {
    // Add the square of the absolute value of each element
    return this.value
      .map((v: Field) => v.apply((e: number) => e ** 2))
      .reduce((a, b) => a.add(b))
      .apply((e: number) => e ** 0.5)
      .apply((v: number) => parseFloat(v.toFixed(10).toString()));
  }
  public norm_inf(): Field {
    // Return the maximum absolute value
    return this.value.map((el) => el.abs()).reduce((a, b) => (a > b ? a : b));
  }
}
