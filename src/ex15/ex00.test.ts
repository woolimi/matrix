import { Vector, Matrix, C } from "../utils";

const vectorAdd = (a: string[], b: string[], expected: string[]) =>
  test(`Vector ADD: [${a}] + [${b}]`, () => {
    const va = Vector.from(C.map(a));
    const vb = Vector.from(C.map(b));
    const ex = Vector.from(C.map(expected));
    expect(va.add(vb)).toEqual(ex);
  });

const vectorSub = (a: string[], b: string[], expected: string[]) =>
  test(`Vector SUB: [${a}] - [${b}]`, () => {
    const va = Vector.from(C.map(a));
    const vb = Vector.from(C.map(b));
    expect(va.sub(vb)).toEqual({ value: C.map(expected) });
  });

const vectorScl = (a: string[], b: string, expected: string[]) =>
  test(`Vector SCL: [${a}] * ${b}`, () => {
    const va = Vector.from(C.map(a));
    expect(va.scl(C.from(b))).toEqual({ value: C.map(expected) });
  });

const matrixAdd = (a: string[][], b: string[][], expected: string[][]) =>
  test(`Matrix ADD: [${a}] + [${b}]`, () => {
    const va = Matrix.from(C.map2(a));
    const vb = Matrix.from(C.map2(b));
    expect(va.add(vb)).toEqual({ value: C.map2(expected) });
  });

const matrixSub = (a: string[][], b: string[][], expected: string[][]) =>
  test(`Matrix SUB: [${a}] - [${b}]`, () => {
    const va = Matrix.from(C.map2(a));
    const vb = Matrix.from(C.map2(b));
    expect(va.sub(vb)).toEqual({ value: C.map2(expected) });
  });

const matrixScl = (a: string[][], b: string, expected: string[][]) =>
  test(`Matrix SCL: [${a}] * ${b}`, () => {
    const va = Matrix.from(C.map2(a));
    expect(va.scl(C.from(b))).toEqual({ value: C.map2(expected) });
  });

describe("Test Complex Number Vector ex00", () => {
  vectorAdd(["1 + 2i", "i"], ["1 - 2i", "4"], ["2", "4 + i"]);
  vectorSub(["1 + 2i", "i"], ["1 - 2i", "4"], ["4i", "-4 + i"]);
  vectorScl(["2", "3i", "2 + 5i"], "2", ["4", "6i", "4 + 10i"]);
});

describe("Test Matrix ex00", () => {
  matrixAdd(
    [
      ["1", "2"],
      ["2 + i", "3 - 2i"],
    ],
    [
      ["3 + 3i", "4"],
      ["2", "4"],
    ],
    [
      ["4 + 3i", "6"],
      ["4 + i", "7 - 2i"],
    ],
  );

  matrixSub([["1.2 + 0.5i", "2 + 3i"]], [["3 - i", "4 - 10i"]], [["-1.8 + 1.5i", "-2 + 13i"]]);
  matrixScl(
    [
      ["4i", "5", "7"],
      ["1", "2", "9"],
    ],
    "i + 1",
    [
      ["-4 + 4i", "5i + 5", "7i + 7"],
      ["i + 1", "2i + 2", "9i + 9"],
    ],
  );
});
