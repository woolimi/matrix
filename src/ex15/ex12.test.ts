import { Matrix, C } from "../utils";

describe("Test ex12 - inverse", () => {
  test("Case1", () => {
    const u = Matrix.from(
      C.map2([
        ["1", "0", "0"],
        ["0", "1", "0"],
        ["0", "0", "1"],
      ]),
    );
    expect(u.inverse()).toEqual(
      Matrix.from(
        C.map2([
          ["1", "0", "0"],
          ["0", "1", "0"],
          ["0", "0", "1"],
        ]),
      ),
    );
  });
  test("Case2", () => {
    const u = Matrix.from(
      C.map2([
        ["i", "0", "0"],
        ["0", "i", "0"],
        ["0", "0", "i"],
      ]),
    );
    expect(u.inverse()).toEqual(
      Matrix.from(
        C.map2([
          ["-1i", "0", "0"],
          ["0", "-1i", "0"],
          ["0", "0", "-1i"],
        ]),
      ),
    );
  });
  test("Case3", () => {
    const u = Matrix.from(
      C.map2([
        ["i", "0", "0"],
        ["0", "i", "0"],
        ["1 + i", "0", "i"],
      ]),
    );

    expect(u.inverse()).toEqual(
      Matrix.from(
        C.map2([
          ["-1i", "0", "0"],
          ["0", "-1i", "0"],
          ["1 + i", "0", "-1i"],
        ]),
      ),
    );
  });
});
