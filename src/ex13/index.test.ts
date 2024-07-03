import { Matrix, R } from "../utils";

describe("Test ex13 - Rank", () => {
  test("Case1", () => {
    const u = Matrix.from(
      R.map2([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]),
    );
    expect(u.rank()).toEqual(3);
  });
  test("Case2", () => {
    const u = Matrix.from(
      R.map2([
        [1, 2, 0, 0],
        [2, 4, 0, 0],
        [-1, 2, 1, 1],
      ]),
    );
    expect(u.rank()).toEqual(2);
  });
  test("Case3", () => {
    const u = Matrix.from(
      R.map2([
        [8, 5, -2],
        [4, 7, 20],
        [7, 6, 1],
        [21, 18, 7],
      ]),
    );
    expect(u.rank()).toEqual(3);
  });
  test("Case4", () => {
    const u = Matrix.from(
      R.map2([
        [0, 0],
        [0, 0],
      ]),
    );
    expect(u.rank()).toEqual(0);
  });
  test("Case5", () => {
    const u = Matrix.from(
      R.map2([
        [1, 0],
        [0, 1],
      ]),
    );
    expect(u.rank()).toEqual(2);
  });
  test("Case6", () => {
    const u = Matrix.from(
      R.map2([
        [2, 0],
        [0, 2],
      ]),
    );
    expect(u.rank()).toEqual(2);
  });
  test("Case7", () => {
    const u = Matrix.from(
      R.map2([
        [1, 1],
        [1, 1],
      ]),
    );
    expect(u.rank()).toEqual(1);
  });
  test("Case8", () => {
    const u = Matrix.from(
      R.map2([
        [0, 1],
        [1, 0],
      ]),
    );
    expect(u.rank()).toEqual(2);
  });
  test("Case9", () => {
    const u = Matrix.from(
      R.map2([
        [1, 2],
        [3, 4],
      ]),
    );
    expect(u.rank()).toEqual(2);
  });
  test("Case10", () => {
    const u = Matrix.from(
      R.map2([
        [-7, 5],
        [4, 6],
      ]),
    );
    expect(u.rank()).toEqual(2);
  });
});
