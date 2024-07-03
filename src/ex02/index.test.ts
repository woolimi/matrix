import { Vector, Matrix, lerp, R } from "../utils";

describe("Test ex02 - linear interpolation", () => {
  test("case1 - number", () => {
    expect(lerp(R.from(0), R.from(1), 0)).toEqual(R.from(0));
    expect(lerp(R.from(0), R.from(1), 1)).toEqual(R.from(1));
    expect(lerp(R.from(0), R.from(42), 0.5)).toEqual(R.from(21));
    expect(lerp(R.from(-42), R.from(42), 0.5)).toEqual(R.from(0));
  });
  test("case2 - vector", () => {
    expect(lerp(Vector.from(R.map([-42, 42])), Vector.from(R.map([42, -42])), 0.5)).toEqual(Vector.from(R.map([0, 0])));
    expect(lerp(Vector.from(R.map([2, 1])), Vector.from(R.map([4, 2])), 0.3)).toEqual(Vector.from(R.map([2.6, 1.3])));
  });
  test("case2 - matrix", () => {
    expect(
      lerp(
        Matrix.from(
          R.map2([
            [2, 1],
            [3, 4],
          ]),
        ),
        Matrix.from(
          R.map2([
            [20, 10],
            [30, 40],
          ]),
        ),
        0.5,
      ),
    ).toEqual(
      Matrix.from(
        R.map2([
          [11, 5.5],
          [16.5, 22],
        ]),
      ),
    );
  });
});
