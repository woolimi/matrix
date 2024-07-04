import { Vector, R } from "../utils";

describe("Test ex03 - dot product", () => {
  test("case1", () => {
    const u = Vector.from(R.map([0, 0]));
    const v = Vector.from(R.map([0, 0]));
    expect(u.dot(v)).toEqual(R.from(0));
  });

  test("case2", () => {
    const u = Vector.from(R.map([1, 0]));
    const v = Vector.from(R.map([0, 0]));
    expect(u.dot(v)).toEqual(R.from(0));
  });

  test("case3", () => {
    const u = Vector.from(R.map([1, 0]));
    const v = Vector.from(R.map([1, 0]));
    expect(u.dot(v)).toEqual(R.from(1));
  });

  test("case4", () => {
    const u = Vector.from(R.map([1, 0]));
    const v = Vector.from(R.map([0, 1]));
    expect(u.dot(v)).toEqual(R.from(0));
  });

  test("case5", () => {
    const u = Vector.from(R.map([1, 1]));
    const v = Vector.from(R.map([1, 1]));
    expect(u.dot(v)).toEqual(R.from(2));
  });

  test("case6", () => {
    const u = Vector.from(R.map([4, 2]));
    const v = Vector.from(R.map([2, 1]));
    expect(u.dot(v)).toEqual(R.from(10));
  });
});
