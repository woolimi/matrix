import { Vector, R, cross_product } from "../utils";

describe("Test ex06", () => {
  test("Case1", () => {
    expect(cross_product(Vector.from(R.map([0, 0, 0])), Vector.from(R.map([0, 0, 0])))).toEqual(
      Vector.from(R.map([0, 0, 0])),
    );
  });
  test("Case2", () => {
    expect(cross_product(Vector.from(R.map([1, 0, 0])), Vector.from(R.map([0, 0, 0])))).toEqual(
      Vector.from(R.map([0, 0, 0])),
    );
  });
  test("Case3", () => {
    expect(cross_product(Vector.from(R.map([1, 0, 0])), Vector.from(R.map([0, 1, 0])))).toEqual(
      Vector.from(R.map([0, 0, 1])),
    );
  });
  test("Case4", () => {
    expect(cross_product(Vector.from(R.map([8, 7, -4])), Vector.from(R.map([3, 2, 1])))).toEqual(
      Vector.from(R.map([15, -20, -5])),
    );
  });
  test("Case6", () => {
    expect(cross_product(Vector.from(R.map([1, 1, 1])), Vector.from(R.map([0, 0, 0])))).toEqual(
      Vector.from(R.map([0, 0, 0])),
    );
  });
  test("Case7", () => {
    expect(cross_product(Vector.from(R.map([1, 1, 1])), Vector.from(R.map([1, 1, 1])))).toEqual(
      Vector.from(R.map([0, 0, 0])),
    );
  });
});
