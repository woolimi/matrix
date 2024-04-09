import { inspect } from "util";
import type { Field } from "./Type.class";

export class Matrix<T extends Field> {
  public value: T[][];

  constructor(value: T[][]) {
    this.value = value;
  }

  static from(value: Field[][]): Matrix<Field> {
    return new Matrix(value);
  }

  get shape() {
    return `(${this.value.length}, ${this.value[0].length})`;
  }
  get isSquare() {
    return this.value.length === this.value[0].length;
  }

  // Override the default toString() method
  [inspect.custom]() {
    return this.value;
  }

  public add(v: Matrix<T>) {
    if (this.shape !== v.shape) {
      throw new Error("Matrix shapes do not match");
    }
    return Matrix.from(this.value.map((row, rowIdx) => row.map((el, colIdx) => el.add(v.value[rowIdx][colIdx]))));
  }

  public sub(v: Matrix<T>) {
    if (this.shape !== v.shape) {
      throw new Error("Matrix shapes do not match");
    }
    return Matrix.from(this.value.map((row, rowIdx) => row.map((el, colIdx) => el.sub(v.value[rowIdx][colIdx]))));
  }

  public scl(n: number) {
    return Matrix.from(this.value.map((row) => row.map((el) => el.scl(n))));
  }
}
