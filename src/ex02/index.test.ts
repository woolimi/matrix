import { Vector, Matrix, lerp, R } from "../utils";

describe("Test ex02", () => {
  test("case1", () => {
    expect(lerp(R.from(0), R.from(1), 0)).toEqual(R.from(0));
  });
  test("case2", () => {
    expect(lerp(R.from(0), R.from(1), 1)).toEqual(R.from(1));
  });
  test("case3", () => {
    expect(lerp(R.from(0), R.from(1), 0.5)).toEqual(R.from(0.5));
  });
  test("case3", () => {
    expect(lerp(R.from(0), R.from(1), 0.3)).toEqual(R.from(0.3));
  });

  test("case4", () => {
    expect(lerp(Vector.from(R.map([2, 1])), Vector.from(R.map([4, 2])), 0.3)).toEqual(Vector.from(R.map([2.6, 1.3])));
  });

  test("case5", () => {
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
