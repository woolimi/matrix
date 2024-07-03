import { Matrix, R } from "../utils";

describe("Test ex12 - inverse", () => {
  test("Case1", () => {
    const u = Matrix.from(
      R.map2([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]),
    );
    expect(u.inverse()).toEqual(
      Matrix.from(
        R.map2([
          [1, 0, 0],
          [0, 1, 0],
          [0, 0, 1],
        ]),
      ),
    );
  });
  test("Case2", () => {
    const u = Matrix.from(
      R.map2([
        [2, 0, 0],
        [0, 2, 0],
        [0, 0, 2],
      ]),
    );
    expect(u.inverse()).toEqual(
      Matrix.from(
        R.map2([
          [0.5, 0.0, 0.0],
          [0.0, 0.5, 0.0],
          [0.0, 0.0, 0.5],
        ]),
      ),
    );
  });
  test("Case3", () => {
    const u = Matrix.from(
      R.map2([
        [8, 5, -2],
        [4, 7, 20],
        [7, 6, 1],
      ]),
    );
    expect(u.inverse()).toEqual(
      Matrix.from(
        R.map2([
          [0.6494252873563218, 0.09770114942528735, -0.6551724137931034],
          [-0.7816091954022988, -0.12643678160919541, 0.9655172413793103],
          [0.14367816091954022, 0.07471264367816091, -0.2068965517241379],
        ]),
      ),
    );
  });
  test("Case4", () => {
    const u = Matrix.from(
      R.map2([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 0],
      ]),
    );
    expect(() => u.inverse()).toThrow("Matrix is singular. Cannot be inverted");
  });
});
