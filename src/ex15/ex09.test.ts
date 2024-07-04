import { Matrix, C } from "../utils";

describe("Test ex09 - Transpose", () => {
  test("Case1", () => {
    const u = Matrix.from(
      C.map2([
        ["2", "3"],
        ["4", "5"],
      ]),
    );
    expect(u.transpose()).toEqual(
      Matrix.from(
        C.map2([
          ["2", "4"],
          ["3", "5"],
        ]),
      ),
    );
  });

  test("Case2", () => {
    const u = Matrix.from(
      C.map2([
        ["1", "2", "3i"],
        ["4i", "5", "6"],
        ["7", "8i", "9"],
      ]),
    );
    expect(u.transpose()).toEqual(
      Matrix.from(
        C.map2([
          ["1", "4i", "7"],
          ["2", "5", "8i"],
          ["3i", "6", "9"],
        ]),
      ),
    );
  });
});
