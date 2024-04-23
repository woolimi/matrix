import { Matrix, R } from "../utils";

describe("Test ex08 - Trace", () => {
  test("Case1", () => {
    const u = Matrix.from(
      R.map2([
        [1, 0],
        [0, 1],
      ]),
    );
    expect(u.trace()).toEqual(R.from(2));
  });

  test("Case2", () => {
    const u = Matrix.from(
      R.map2([
        [2, -5, 0],
        [4, 3, 7],
        [-2, 3, 4],
      ]),
    );
    expect(u.trace()).toEqual(R.from(9));
  });

  test("Case3", () => {
    const u = Matrix.from(
      R.map2([
        [-2, -8, 4],
        [1, -23, 4],
        [0, 6, 4],
      ]),
    );
    expect(u.trace()).toEqual(R.from(-21));
  });
});
