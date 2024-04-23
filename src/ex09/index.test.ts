import { Matrix, R } from "../utils";

describe("Test ex09 - Transpose", () => {
  test("Case1", () => {
    const u = Matrix.from(
      R.map2([
        [2, 3],
        [4, 5],
      ]),
    );
    expect(u.transpose()).toEqual(
      Matrix.from(
        R.map2([
          [2, 4],
          [3, 5],
        ]),
      ),
    );
  });

  test("Case2", () => {
    const u = Matrix.from(
      R.map2([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    );
    expect(u.transpose()).toEqual(
      Matrix.from(
        R.map2([
          [1, 4, 7],
          [2, 5, 8],
          [3, 6, 9],
        ]),
      ),
    );
  });
});
