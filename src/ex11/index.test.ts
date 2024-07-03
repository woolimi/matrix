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
  test("Case5", () => {
    const u = Matrix.from(
      R.map2([
        [0, 0],
        [0, 0],
      ]),
    );
    expect(u.determinant()).toEqual(R.from(0));
  });
  test("Case6", () => {
    const u = Matrix.from(
      R.map2([
        [1, 0],
        [0, 1],
      ]),
    );
    expect(u.determinant()).toEqual(R.from(1));
  });
  test("Case7", () => {
    const u = Matrix.from(
      R.map2([
        [2, 0],
        [0, 2],
      ]),
    );
    expect(u.determinant()).toEqual(R.from(4));
  });
  test("Case8", () => {
    const u = Matrix.from(
      R.map2([
        [1, 1],
        [1, 1],
      ]),
    );
    expect(u.determinant()).toEqual(R.from(0));
  });
  test("Case9", () => {
    const u = Matrix.from(
      R.map2([
        [0, 1],
        [1, 0],
      ]),
    );
    expect(u.determinant()).toEqual(R.from(-1));
  });
  test("Case10", () => {
    const u = Matrix.from(
      R.map2([
        [1, 2],
        [3, 4],
      ]),
    );
    expect(u.determinant()).toEqual(R.from(-2));
  });
  test("Case11", () => {
    const u = Matrix.from(
      R.map2([
        [-7, 5],
        [4, 6],
      ]),
    );
    expect(u.determinant()).toEqual(R.from(-62));
  });
  test("Case12", () => {
    const u = Matrix.from(
      R.map2([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]),
    );
    expect(u.determinant()).toEqual(R.from(1));
  });
});
