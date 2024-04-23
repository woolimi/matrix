import { inspect } from "util";
import type { Field } from "./Type.class";
import { Vector } from "./Vector.class";

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

  public mul_vec(v: Vector<T>): Vector<Field> {
    if (this.value[0].length !== v.size) {
      throw new Error("Matrix and Vector shapes do not match");
    }
    return Vector.from(this.value.map((row) => Vector.from(row).dot(v)));
  }

  public mul_mat(m: Matrix<T>): Matrix<Field> {
    if (this.value[0].length !== m.value.length) {
      throw new Error("Matrix shapes do not match");
    }
    const transposed_m = m.transpose();

    return Matrix.from(
      this.value.map((row) => transposed_m.value.map((col) => Vector.from(row).dot(Vector.from(col)))),
    );
  }

  public trace() {
    if (!this.isSquare) {
      throw new Error("Matrix is not square");
    }

    let total = null;
    for (let index = 0; index < this.value.length; index++) {
      if (!total) {
        total = this.value[index][index];
        continue;
      }
      total = total.add(this.value[index][index]);
    }
    return total;
  }

  public transpose() {
    return Matrix.from(this.value[0].map((_, colIdx) => this.value.map((row) => row[colIdx])));
  }
}
