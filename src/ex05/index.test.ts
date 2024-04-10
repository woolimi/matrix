import { Vector, R, angle_cos } from "../utils";

describe("Test ex05", () => {
  test("Case1", () => {
    expect(angle_cos(Vector.from(R.map([1, 0])), Vector.from(R.map([1, 0])))).toEqual(R.from(1));
  });
  test("Case2", () => {
    expect(angle_cos(Vector.from(R.map([1, 0])), Vector.from(R.map([0, 1])))).toEqual(R.from(0));
  });
  test("Case3", () => {
    expect(angle_cos(Vector.from(R.map([-1, 1])), Vector.from(R.map([1, -1])))).toEqual(R.from(-1));
  });
  test("Case4", () => {
    expect(angle_cos(Vector.from(R.map([2, 1])), Vector.from(R.map([4, 2])))).toEqual(R.from(1));
  });
  test("Case5", () => {
    expect(angle_cos(Vector.from(R.map([1, 2, 3])), Vector.from(R.map([4, 5, 6])))).toEqual(R.from(0.9746318462));
  });
});
