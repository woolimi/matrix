import { Vector, R } from "../utils";

describe("Test ex03", () => {
  test("Case1", () => {
    expect(Vector.from(R.map([0, 0, 0])).norm_1()).toEqual(R.from(0));
    expect(Vector.from(R.map([0, 0, 0])).norm()).toEqual(R.from(0));
    expect(Vector.from(R.map([0, 0, 0])).norm_inf()).toEqual(R.from(0));
  });
  test("Case2", () => {
    expect(Vector.from(R.map([1, 2, 3])).norm_1()).toEqual(R.from(6));
    expect(Vector.from(R.map([1, 2, 3])).norm()).toEqual(R.from(3.7416573867739413));
    expect(Vector.from(R.map([1, 2, 3])).norm_inf()).toEqual(R.from(3));
  });
  test("Case3", () => {
    expect(Vector.from(R.map([-1, -2])).norm_1()).toEqual(R.from(3));
    expect(Vector.from(R.map([-1, -2])).norm()).toEqual(R.from(2.23606797749979));
    expect(Vector.from(R.map([-1, -2])).norm_inf()).toEqual(R.from(2));
  });
});