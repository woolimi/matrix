import { Matrix, C } from "../utils";

describe("Test ex10 - row-echelon form", () => {
  test("Case1", () => {
    const u = Matrix.from(
      C.map2([
        ["1", "0", "0"],
        ["0", "1", "0"],
        ["0", "0", "1"],
      ]),
    );
    expect(u.row_echelon()).toEqual(
      Matrix.from(
        C.map2([
          ["1", "0", "0"],
          ["0", "1", "0"],
          ["0", "0", "1"],
        ]),
      ),
    );
  });
  test("Case1", () => {
    const u = Matrix.from(
      C.map2([
        ["2i", "2", "2"],
        ["3", "1 + i", "2"],
        ["4", "i", "1"],
      ]),
    );

    expect(u.row_echelon()).toEqual(
      Matrix.from(
        C.map2([
          // ["1", "0", "0"],
          // ["0", "1", "0"],
          // ["0", "0", "1"],
        ]),
      ),
    );
  });
});
