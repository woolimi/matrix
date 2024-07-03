import { Vector, Matrix, R } from "../utils";

const vectorSub = (a: number[], b: number[], expected: number[]) =>
  test(`Vector SUB: [${a}] - [${b}]`, () => {
    const va = Vector.from(R.map(a));
    const vb = Vector.from(R.map(b));
    expect(va.sub(vb)).toEqual({ value: R.map(expected) });
  });
const matrixSub = (a: number[][], b: number[][], expected: number[][]) =>
  test(`Matrix SUB: [${a}] - [${b}]`, () => {
    const va = Matrix.from(R.map2(a));
    const vb = Matrix.from(R.map2(b));
    expect(va.sub(vb)).toEqual({ value: R.map2(expected) });
  });

describe("Test ex00 - sub", () => {
  vectorSub([0, 0], [0, 0], [0, 0]);
  vectorSub([1, 0], [0, 1], [1, -1]);
  vectorSub([1, 1], [1, 1], [0, 0]);
  vectorSub([21, 21], [21, 21], [0, 0]);
  vectorSub([-21, 21], [21, -21], [-42, 42]);
  vectorSub([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0], [-9, -7, -5, -3, -1, 1, 3, 5, 7, 9]);

  matrixSub(
    [
      [0, 0],
      [0, 0],
    ],
    [
      [0, 0],
      [0, 0],
    ],
    [
      [0, 0],
      [0, 0],
    ],
  );
  matrixSub(
    [
      [1, 0],
      [0, 1],
    ],
    [
      [0, 0],
      [0, 0],
    ],
    [
      [1, 0],
      [0, 1],
    ],
  );
  matrixSub(
    [
      [1, 1],
      [1, 1],
    ],
    [
      [1, 1],
      [1, 1],
    ],
    [
      [0, 0],
      [0, 0],
    ],
  );
  matrixSub(
    [
      [21, 21],
      [21, 21],
    ],
    [
      [21, 21],
      [21, 21],
    ],
    [
      [0, 0],
      [0, 0],
    ],
  );
});
