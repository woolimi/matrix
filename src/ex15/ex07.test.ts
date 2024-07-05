import { Matrix, Vector, C } from "../utils";

describe("Test ex07 - multiplication", () => {
  test("Case1", () => {
    const u = Matrix.from(
      C.map2([
        ["1", "0"],
        ["0", "1"],
      ]),
    );
    const v = Vector.from(C.map(["4", "2"]));

    expect(u.mul_vec(v)).toEqual(Vector.from(C.map(["4", "2"])));
  });

  test("Case2", () => {
    const u = Matrix.from(
      C.map2([
        ["2", "0"],
        ["0", "2"],
      ]),
    );
    const v = Vector.from(C.map(["4", "2"]));
    expect(u.mul_vec(v)).toEqual(Vector.from(C.map(["8", "4"])));
  });

  test("Case3", () => {
    const u = Matrix.from(
      C.map2([
        ["2i", "-2"],
        ["-2", "2i"],
      ]),
    );
    const v = Vector.from(C.map(["4i", "2"]));
    expect(u.mul_vec(v)).toEqual(Vector.from(C.map(["-12", "-4i"])));
  });

  test("Case4", () => {
    const u = Matrix.from(
      C.map2([
        ["3", "-5"],
        ["6", "8"],
      ]),
    );
    const v = Matrix.from(
      C.map2([
        ["2", "1"],
        ["4", "2"],
      ]),
    );
    expect(u.mul_mat(v)).toEqual(
      Matrix.from(
        C.map2([
          ["-14", "-7"],
          ["44", "22"],
        ]),
      ),
    );
  });
  test("Case5", () => {
    const u = Matrix.from(
      C.map2([
        ["3i", "-5"],
        ["6", "8"],
      ]),
    );
    const v = Matrix.from(
      C.map2([
        ["2i - 1", "1"],
        ["4", "2"],
      ]),
    );
    expect(u.mul_mat(v)).toEqual(
      Matrix.from(
        C.map2([
          ["-26 - 3i", "-10 + 3i"],
          ["26 + 12i", "22"],
        ]),
      ),
    );
  });
});
