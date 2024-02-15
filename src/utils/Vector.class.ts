import { inspect } from "util";
import type { Field } from "./Type.class";

export class Vector<T extends Field> {
  private value: T[];

  constructor(value: T[]) {
    this.value = value;
  }

  static from(value: Field[]): Vector<Field> {
    return new Vector(value);
  }

  get size() {
    return this.value.length;
  }

  // Override the default toString() method
  [inspect.custom]() {
    return this.value;
  }

  public add(v: Vector<T>) {
    if (this.size !== v.size) {
      throw new Error("Vector sizes do not match");
    }
    return Vector.from(this.value.map((el, idx) => el.add(v.value[idx])));
  }

  public sub(v: Vector<T>) {
    if (this.size !== v.size) {
      throw new Error("Vector sizes do not match");
    }
    return Vector.from(this.value.map((el, idx) => el.sub(v.value[idx])));
  }

  public scl(n: number) {
    return Vector.from(this.value.map((el) => el.scl(n)));
  }
}
