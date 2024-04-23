import { Vector, R, cross_product } from "../utils";

describe("Test ex06", () => {
  test("Case1", () => {
    expect(cross_product(Vector.from(R.map([0, 0, 1])), Vector.from(R.map([1, 0, 0])))).toEqual(
      Vector.from(R.map([0, 1, 0])),
    );
  });
  test("Case2", () => {
    expect(cross_product(Vector.from(R.map([1, 2, 3])), Vector.from(R.map([4, 5, 6])))).toEqual(
      Vector.from(R.map([-3, 6, -3])),
    );
  });
  test("Case3", () => {
    expect(cross_product(Vector.from(R.map([4, 2, -3])), Vector.from(R.map([-2, -5, 16])))).toEqual(
      Vector.from(R.map([17, -58, -16])),
    );
  });
});
