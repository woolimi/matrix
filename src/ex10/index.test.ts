import { Matrix, R } from "../utils";

describe("Test ex10 - row-echelon form", () => {
  test("Case1", () => {
    const u = Matrix.from(
      R.map2([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]),
    );
    expect(u.row_echelon()).toEqual(
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
        [1, 2],
        [3, 4],
      ]),
    );
    expect(u.row_echelon()).toEqual(
      Matrix.from(
        R.map2([
          [1, 0],
          [0, 1],
        ]),
      ),
    );
  });
  test("Case3", () => {
    const u = Matrix.from(
      R.map2([
        [1, 2],
        [2, 4],
      ]),
    );
    expect(u.row_echelon()).toEqual(
      Matrix.from(
        R.map2([
          [1, 2],
          [0, 0],
        ]),
      ),
    );
  });

  test("Case4", () => {
    const u = Matrix.from(
      R.map2([
        [8, 5, -2, 4, 28],
        [4, 2.5, 20, 4, -4],
        [8, 5, 1, 4, 17],
      ]),
    );
    expect(u.row_echelon()).toEqual(
      Matrix.from(
        R.map2([
          [1, 0.625, 0, 0, -12.166666666666668],
          [0, 0, 1, 0, -3.666666666666667],
          [0, 0, 0, 1, 29.500000000000004],
        ]),
      ),
    );
  });
});
