import { inspect } from "util";
import { R, C, type Field } from "./Type.class";
import { Vector } from "./Vector.class";
import cloneDeep from "lodash-ts/cloneDeep";

const rowSwap = (m: Field[][], row1: number, row2: number) => {
  if (row1 === row2) return;
  const tmp = m[row1];
  m[row1] = m[row2];
  m[row2] = tmp;
};
const setPivot = (m: Field[][], initRow: number) => {
  const nbRows = m.length;
  const nbCols = m[0].length;
  for (let col = 0; col < nbCols; col++) {
    for (let row = initRow; row < nbRows; row++) {
      if (!m[row][col].isZero) {
        rowSwap(m, row, initRow);
        return col;
      }
    }
  }
  return nbCols;
};
const normalizeRow = (m: Field[][], row: number) => {
  const nbCols = m[0].length;
  for (let col = 0; col < nbCols; col++) {
    if (m[row][col].isZero) continue;

    m[row] = m[row].map((el: Field) => {
      return el.div(m[row][col]);
    });
    return;
  }
};
const gaussianElimination = (m: Field[][], initRow: number, pivotCol: number) => {
  const nbRows = m.length;
  if (m[initRow].every((el: Field) => el.isZero)) return;

  for (let row = initRow + 1; row < nbRows; row++) {
    const factor = m[row][pivotCol];
    if (factor.isZero) continue;

    m[row] = m[row].map((el: Field, col: number) => el.sub(m[initRow][col].mul(factor)));
  }
};

const gaussianEliminationReverse = (m: Field[][], initRow: number, pivotCol: number) => {
  if (m[initRow].every((el: Field) => el.isZero)) return;

  for (let row = initRow - 1; row >= 0; row--) {
    const factor = m[row][pivotCol];
    if (factor.isZero) continue;

    m[row] = m[row].map((el: Field, col: number) => el.sub(m[initRow][col].mul(factor)));
  }
};

const deleteRow = (m: Field[][], row: number) => {
  return m.filter((_, idx) => idx !== row);
};
const deleteCol = (m: Field[][], col: number) => {
  return m.map((row) => row.filter((_, idx) => idx !== col));
};
const cloneMatrix = (m: Field[][]) => {
  return cloneDeep(m).map((row: Field[]) =>
    row.map((el: Field) => {
      if (m[0][0] instanceof R) return new R(el.value);
      else return new C(el.value);
    }),
  );
};

const mergeMatrix = (m1: Field[][], m2: Field[][]) => {
  const _m1 = cloneMatrix(m1);
  const _m2 = cloneMatrix(m2);

  return _m1.map((row: Field[], rowIdx: number) => row.concat(_m2[rowIdx]));
};

const sliceMatrix = (m: Field[][], start: number, end: number) => {
  const _m = cloneMatrix(m);
  return _m.map((row: Field[]) => row.slice(start, end));
};

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

  public transpose(): Matrix<Field> {
    return Matrix.from(this.value[0].map((_, colIdx) => this.value.map((row) => row[colIdx])));
  }

  /*
   ** https://www.youtube.com/watch?v=f1e2Zij6W3s
   ** Row echelon form
   ** 1. Start with the first non zero column. If necessary, swap two rows.
   ** 2. Use replacement row operations to obtain a zero entry in all positions below the pivot entry.
   ** 3. Ignore the pivot row and all rows above it. Repeat steps 1 & 2
   **
   ** Reduced row echelon form
   */
  public row_echelon(): Matrix<Field> {
    const value = cloneMatrix(this.value);
    const nbRows = value.length;

    // Row echelon form
    for (let row = 0; row < nbRows; row++) {
      const col = setPivot(value, row);
      normalizeRow(value, row);
      gaussianElimination(value, row, col);
    }
    // Reduced row echelon form
    for (let row = nbRows - 1; row >= 0; row--) {
      const col = setPivot(value, row);
      gaussianEliminationReverse(value, row, col);
    }
    return Matrix.from(value);
  }

  public determinant(): Field {
    if (!this.isSquare) throw new Error("Matrix is not square");

    const _determinant = (m: Field[][]): Field => {
      if (m.length === 2) {
        return m[0][0].mul(m[1][1]).sub(m[1][0].mul(m[0][1]));
      }
      let det: any = null;
      for (let col = 0; col < m.length; col++) {
        const a = m[0][col];
        const partial = deleteCol(deleteRow(m, 0), col);
        const M = _determinant(partial);
        const sign = col % 2 === 0 ? 1 : -1;
        det = det?.add(a.scl(sign).mul(M)) || a.scl(sign).mul(M);
      }
      return det;
    };
    return _determinant(this.value);
  }

  public identity(): Matrix<Field> {
    if (!this.isSquare) throw new Error("Matrix is not square");
    return Matrix.from(
      this.value.map((row, rowIdx) =>
        row.map((el, colIdx) => {
          const isR = el instanceof R;
          if (rowIdx === colIdx) return isR ? new R(1) : new C("1");
          else return isR ? new R(0) : new C("0");
        }),
      ),
    );
  }
  public inverse(): Matrix<Field> {
    if (!this.isSquare) throw new Error("Matrix is not square");
    const dim = this.value.length;
    const matrixI = this.identity();
    const m = mergeMatrix(this.value, matrixI.value);
    const rowEchelonForm = Matrix.from(m).row_echelon();

    return Matrix.from(sliceMatrix(rowEchelonForm.value, dim, dim * 2));
  }

  public rank(): number {
    const rowEchelonForm = this.row_echelon();
    return rowEchelonForm.value.filter((row) => row.some((el) => !el.isZero)).length;
  }
}
