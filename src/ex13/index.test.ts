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
});
