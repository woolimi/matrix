import { Matrix, C } from "../utils";

describe("Test ex10 - row-echelon form", () => {
  test("Case1", () => {
    const u = Matrix.from(
      C.map2([
        ["2i", "2", "2"],
        ["3", "1 + i", "2"],
        ["4", "i", "10"],
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

  test("Case2", () => {
    const u = Matrix.from(
      C.map2([
        ["2i", "2"],
        ["4i", "4"],
      ]),
    );

    expect(u.row_echelon()).toEqual(
      Matrix.from(
        C.map2([
          ["1", "-i"],
          ["0", "0"],
        ]),
      ),
    );
  });

  test("Case3", () => {
    const u = Matrix.from(
      C.map2([
        ["4i", "6", "2"],
        ["4i", "6", "4"],
      ]),
    );

    expect(u.row_echelon()).toEqual(
      Matrix.from(
        C.map2([
          ["1", "-1.5i", "0"],
          ["0", "0", "1"],
        ]),
      ),
    );
  });

  test("Case4", () => {
    const u = Matrix.from(
      C.map2([
        ["2i", "2", "2", "i"],
        ["3", "1 + i", "2", "2"],
        ["4", "i", "10", "1 + 2i"],
      ]),
    );

    expect(u.row_echelon()).toEqual(
      Matrix.from(
        C.map2([
          ["1", "0", "0", "0.635408245755861 - 0.06709781729991918i"],
          ["0", "1", "0", "0.12206952303961197 - 0.35004042037186744i"],
          ["0", "0", "1", "-0.18916734033953114 + 0.21463217461600648i"],
        ]),
      ),
    );
  });
});
