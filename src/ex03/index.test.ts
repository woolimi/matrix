import { Vector, R } from "../utils";

describe("Test ex03", () => {
  test("case1", () => {
    const u = Vector.from(R.map([0, 0]));
    const v = Vector.from(R.map([1, 1]));
    expect(u.dot(v)).toEqual(new R(0));
  });

  test("case2", () => {
    const u = Vector.from(R.map([1, 1]));
    const v = Vector.from(R.map([1, 1]));
    expect(u.dot(v)).toEqual(new R(2));
  });

  test("case3", () => {
    const u = Vector.from(R.map([-1, 6]));
    const v = Vector.from(R.map([3, 2]));
    expect(u.dot(v)).toEqual(new R(9));
  });
});
