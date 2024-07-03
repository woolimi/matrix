import { Vector, Matrix, R } from "../utils";

const vectorScl = (a: number[], b: number, expected: number[]) =>
  test(`Vector SCL: [${a}] * ${b}`, () => {
    const va = Vector.from(R.map(a));
    expect(va.scl(b)).toEqual({ value: R.map(expected) });
  });

const matrixScl = (a: number[][], b: number, expected: number[][]) =>
  test(`Matrix SCL: [${a}] * ${b}`, () => {
    const va = Matrix.from(R.map2(a));
    expect(va.scl(b)).toEqual({ value: R.map2(expected) });
  });

describe("Test ex00 - scl", () => {
  vectorScl([0, 0], 1, [0, 0]);
  vectorScl([1, 0], 1, [1, 0]);
  vectorScl([1, 1], 2, [2, 2]);
  vectorScl([21, 21], 2, [42, 42]);
  vectorScl([42, 42], 0.5, [21, 21]);

  matrixScl(
    [
      [0, 0],
      [0, 0],
    ],
    0,
    [
      [0, 0],
      [0, 0],
    ],
  );
  matrixScl(
    [
      [1, 0],
      [0, 1],
    ],
    1,
    [
      [1, 0],
      [0, 1],
    ],
  );
  matrixScl(
    [
      [1, 2],
      [3, 4],
    ],
    2,
    [
      [2, 4],
      [6, 8],
    ],
  );
  matrixScl(
    [
      [21, 21],
      [21, 21],
    ],
    0.5,
    [
      [10.5, 10.5],
      [10.5, 10.5],
    ],
  );
});
