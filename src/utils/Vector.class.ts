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

  /*
   ** Dot product
   ** Time complexity: O(n)
   ** Space complexity: O(n)
   **
   ** u = [a1, a2, a3]
   ** v = [b1, b2, b3]
   ** dot(u, v) = a1*b1 + a2*b2 + a3*b3
   */
  public dot(v: Vector<T>): Field {
    if (this.size !== v.size) {
      throw new Error("Vector sizes do not match");
    }
    return this.value.map((el, idx) => el.conjugate().mul(v.value[idx])).reduce((a, b) => a.add(b));
  }

  /*
   ** Manhattan norm
   ** Add the absolute value of each element
   **
   ** Time complexity: O(n)
   ** Space complexity: O(n)
   **
   ** u = [a1, a2, a3]
   ** norm_1(u) = |a1| + |a2| + |a3|
   */
  public norm_1(): Field {
    return this.value.map((el) => el.abs()).reduce((a, b) => a.add(b));
  }

  /*
   ** Euclidean norm
   ** Add the square of the absolute value of each element
   **
   ** Time complexity: O(n)
   ** Space complexity: O(n)
   **
   ** u = [a1, a2, a3]
   ** norm_2(u) = sqrt(|a1|^2 + |a2|^2 + |a3|^2)
   */
  public norm(): Field {
    return this.value
      .map((v: Field) => v.abs())
      .map((v: Field) => v.mul(v))
      .reduce((a, b) => a.add(b))
      .sqrt();
  }

  /*
   ** Supremum norm
   ** Return the maximum absolute value
   **
   ** Time complexity: O(n)
   ** Space complexity: O(n)
   **
   ** u = [a1, a2, a3]
   ** norm_inf(u) = max(|a1|, |a2|, |a3|)
   */
  public norm_inf(): Field {
    return this.value.map((el) => el.abs()).reduce((a, b) => (a > b ? a : b));
  }
}
