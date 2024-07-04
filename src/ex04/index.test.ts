import { Vector, R } from "../utils";

describe("Test ex04 - norm", () => {
  test("Case1 - Euclidean norm", () => {
    expect(Vector.from(R.map([0])).norm()).toEqual(R.from(0));
    expect(Vector.from(R.map([1])).norm()).toEqual(R.from(1));
    expect(Vector.from(R.map([0, 0])).norm()).toEqual(R.from(0));
    expect(Vector.from(R.map([1, 0])).norm()).toEqual(R.from(1));
    expect(Vector.from(R.map([2, 1])).norm()).toEqual(R.from(2.23606797749979));
    expect(Vector.from(R.map([4, 2])).norm()).toEqual(R.from(4.47213595499958));
    expect(Vector.from(R.map([-4, -2])).norm()).toEqual(R.from(4.47213595499958));
  });
  test("Case2 - Manhattan norm", () => {
    expect(Vector.from(R.map([0])).norm_1()).toEqual(R.from(0));
    expect(Vector.from(R.map([1])).norm_1()).toEqual(R.from(1));
    expect(Vector.from(R.map([0, 0])).norm_1()).toEqual(R.from(0));
    expect(Vector.from(R.map([1, 0])).norm_1()).toEqual(R.from(1));
    expect(Vector.from(R.map([2, 1])).norm_1()).toEqual(R.from(3));
    expect(Vector.from(R.map([4, 2])).norm_1()).toEqual(R.from(6));
    expect(Vector.from(R.map([-4, -2])).norm_1()).toEqual(R.from(6));
  });
  test("Case3 - Supremum norm", () => {
    expect(Vector.from(R.map([1, 2, 3])).norm_inf()).toEqual(R.from(3));
    expect(Vector.from(R.map([0, 0, 0])).norm_inf()).toEqual(R.from(0));
    expect(Vector.from(R.map([-1, -2])).norm_inf()).toEqual(R.from(2));
  });
});
