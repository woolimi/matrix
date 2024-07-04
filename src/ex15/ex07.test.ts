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
});
