import { Vector, Matrix, R } from "../utils";

const vectorAdd = (a: number[], b: number[], expected: number[]) =>
  test(`Vector ADD: [${a}] + [${b}]`, () => {
    const va = Vector.from(R.map(a));
    const vb = Vector.from(R.map(b));
    expect(va.add(vb)).toEqual({ value: R.map(expected) });
  });
const vectorSub = (a: number[], b: number[], expected: number[]) =>
  test(`Vector SUB: [${a}] - [${b}]`, () => {
    const va = Vector.from(R.map(a));
    const vb = Vector.from(R.map(b));
    expect(va.sub(vb)).toEqual({ value: R.map(expected) });
  });

const vectorScl = (a: number[], b: number, expected: number[]) =>
  test(`Vector SCL: [${a}] * ${b}`, () => {
    const va = Vector.from(R.map(a));
    expect(va.scl(b)).toEqual({ value: R.map(expected) });
  });

const matrixAdd = (a: number[][], b: number[][], expected: number[][]) =>
  test(`Matrix ADD: [${a}] + [${b}]`, () => {
    const va = Matrix.from(R.map2(a));
    const vb = Matrix.from(R.map2(b));
    expect(va.add(vb)).toEqual({ value: R.map2(expected) });
  });

const matrixSub = (a: number[][], b: number[][], expected: number[][]) =>
  test(`Matrix SUB: [${a}] - [${b}]`, () => {
    const va = Matrix.from(R.map2(a));
    const vb = Matrix.from(R.map2(b));
    expect(va.sub(vb)).toEqual({ value: R.map2(expected) });
  });

const matrixScl = (a: number[][], b: number, expected: number[][]) =>
  test(`Matrix SCL: [${a}] * ${b}`, () => {
    const va = Matrix.from(R.map2(a));
    expect(va.scl(b)).toEqual({ value: R.map2(expected) });
  });

describe("Test Vector ex00", () => {
  vectorAdd([1, 2], [3, 4], [4, 6]);
  vectorAdd([3, 4, 5], [1, 2, 9], [4, 6, 14]);

  vectorSub([1.2, 2], [3, 4], [-1.8, -2]);
  vectorSub([-1, 3], [3, 2], [-4, 1]);

  vectorScl([1, 2], 3, [3, 6]);
  vectorScl([4, 5, 7], 2, [8, 10, 14]);
});

describe("Test Matrix ex00", () => {
  matrixAdd(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [2, 4],
    ],
    [
      [4, 6],
      [4, 7],
    ],
  );
  matrixAdd([[3, 4, 5]], [[1, 2, 9]], [[4, 6, 14]]);

  matrixSub([[1.2, 2]], [[3, 4]], [[-1.8, -2]]);
  matrixSub([[-1, 3]], [[3, 2]], [[-4, 1]]);

  matrixScl(
    [
      [1, 2],
      [2, 4],
    ],
    3,
    [
      [3, 6],
      [6, 12],
    ],
  );
  matrixScl([[4, 5, 7]], 2, [[8, 10, 14]]);
});
