import { Matrix, C } from "../utils";
describe("Test ex11 - determinant", () => {
  test("Case1", () => {
    const u = Matrix.from(
      C.map2([
        ["1", "-1"],
        ["-1", "1"],
      ]),
    );
    expect(u.determinant()).toEqual(C.from("0"));
  });

  test("Case2", () => {
    const u = Matrix.from(
      C.map2([
        ["i", "0"],
        ["0", "i"],
      ]),
    );
    expect(u.determinant()).toEqual(C.from("-1"));
  });

  test("Case3", () => {
    const u = Matrix.from(
      C.map2([
        ["1 + i", "-1"],
        ["-1", "1 + i"],
      ]),
    );
    expect(u.determinant()).toEqual(C.from("-1 + 2i"));
  });
});
