import { Matrix, R } from "../utils";
describe("Test ex11 - determinant", () => {
  test("Case1", () => {
    const u = Matrix.from(
      R.map2([
        [1, -1],
        [-1, 1],
      ]),
    );
    expect(u.determinant()).toEqual(R.from(0));
  });
  test("Case2", () => {
    const u = Matrix.from(
      R.map2([
        [2, 0, 0],
        [0, 2, 0],
        [0, 0, 2],
      ]),
    );
    expect(u.determinant()).toEqual(R.from(8));
  });
  test("Case3", () => {
    const u = Matrix.from(
      R.map2([
        [8, 5, -2],
        [4, 7, 20],
        [7, 6, 1],
      ]),
    );
    expect(u.determinant()).toEqual(R.from(-174));
  });
  test("Case4", () => {
    const u = Matrix.from(
      R.map2([
        [8, 5, -2, 4],
        [4, 2.5, 20, 4],
        [8, 5, 1, 4],
        [28, -4, 17, 1],
      ]),
    );
    expect(u.determinant()).toEqual(R.from(1032));
  });
});
