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

  public scl(n: number): Vector<Field> {
    return Vector.from(this.value.map((el) => el.scl(n)));
  }

  public dot(v: Vector<T>): Field {
    if (this.size !== v.size) {
      throw new Error("Vector sizes do not match");
    }
    return this.value.map((el, idx) => el.mul(v.value[idx])).reduce((a, b) => a.add(b));
  }

  public norm_1(): Field {
    return this.value.map((el) => el.abs()).reduce((a, b) => a.add(b));
  }
  public norm(): Field {
    return this.value
      .map((el) => el.pow())
      .reduce((a, b) => a.add(b))
      .apply(Math.sqrt);
  }
  public norm_inf(): Field {
    return this.value.map((el) => el.abs()).reduce((a, b) => (a > b ? a : b));
  }
}
