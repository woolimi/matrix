import { Vector, R, angle_cos } from "../utils";

describe("Test ex05 - cosine", () => {
  test("Case1", () => {
    expect(angle_cos(Vector.from(R.map([1, 0])), Vector.from(R.map([0, 1])))).toEqual(R.from(0));
    expect(angle_cos(Vector.from(R.map([8, 7])), Vector.from(R.map([3, 2])))).toEqual(R.from(0.9914542955));
    expect(angle_cos(Vector.from(R.map([1, 1])), Vector.from(R.map([1, 1])))).toEqual(R.from(1));
    expect(angle_cos(Vector.from(R.map([4, 2])), Vector.from(R.map([1, 1])))).toEqual(R.from(0.9486832981));
    expect(angle_cos(Vector.from(R.map([-7, 3])), Vector.from(R.map([6, 4])))).toEqual(R.from(-0.5462677805));
  });

  test("Case2", () => {
    expect(() => angle_cos(Vector.from(R.map([0, 0])), Vector.from(R.map([0, 0])))).toThrow("Division by zero");
  });
});
