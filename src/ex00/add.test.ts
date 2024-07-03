import { Vector, Matrix, R } from "../utils";

const vectorAdd = (a: number[], b: number[], expected: number[]) =>
  test(`Vector ADD: [${a}] + [${b}]`, () => {
    const va = Vector.from(R.map(a));
    const vb = Vector.from(R.map(b));
    expect(va.add(vb)).toEqual({ value: R.map(expected) });
  });

const matrixAdd = (a: number[][], b: number[][], expected: number[][]) =>
  test(`Matrix ADD: [${a}] + [${b}]`, () => {
    const va = Matrix.from(R.map2(a));
    const vb = Matrix.from(R.map2(b));
    expect(va.add(vb)).toEqual({ value: R.map2(expected) });
  });

describe("Test ex00 - add", () => {
  vectorAdd([0, 0], [0, 0], [0, 0]);
  vectorAdd([1, 0], [0, 1], [1, 1]);
  vectorAdd([1, 1], [1, 1], [2, 2]);
  vectorAdd([21, 21], [21, 21], [42, 42]);
  vectorAdd([-21, 21], [21, -21], [0, 0]);
  vectorAdd([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0], [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]);

  matrixAdd(
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
  matrixAdd(
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
  matrixAdd(
    [
      [1, 1],
      [1, 1],
    ],
    [
      [1, 1],
      [1, 1],
    ],
    [
      [2, 2],
      [2, 2],
    ],
  );
  matrixAdd(
    [
      [21, 21],
      [21, 21],
    ],
    [
      [21, 21],
      [21, 21],
    ],
    [
      [42, 42],
      [42, 42],
    ],
  );
});
