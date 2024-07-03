import { Matrix, Vector, R } from "../utils";

describe("Test ex07 - multiplication", () => {
  test("Case1", () => {
    const u = Matrix.from(
      R.map2([
        [1, 0],
        [0, 1],
      ]),
    );
    const v = Vector.from(R.map([4, 2]));

    expect(u.mul_vec(v)).toEqual(Vector.from(R.map([4, 2])));
  });

  test("Case2", () => {
    const u = Matrix.from(
      R.map2([
        [2, 0],
        [0, 2],
      ]),
    );
    const v = Vector.from(R.map([4, 2]));
    expect(u.mul_vec(v)).toEqual(Vector.from(R.map([8, 4])));
  });

  test("Case3", () => {
    const u = Matrix.from(
      R.map2([
        [2, -2],
        [-2, 2],
      ]),
    );
    const v = Vector.from(R.map([4, 2]));
    expect(u.mul_vec(v)).toEqual(Vector.from(R.map([4, -4])));
  });

  test("Case4", () => {
    const u = Matrix.from(
      R.map2([
        [1, 0],
        [0, 1],
      ]),
    );
    const v = Matrix.from(
      R.map2([
        [1, 0],
        [0, 1],
      ]),
    );
    expect(u.mul_mat(v)).toEqual(
      Matrix.from(
        R.map2([
          [1, 0],
          [0, 1],
        ]),
      ),
    );
  });

  test("Case5", () => {
    const u = Matrix.from(
      R.map2([
        [1, 0],
        [0, 1],
      ]),
    );
    const v = Matrix.from(
      R.map2([
        [2, 1],
        [4, 2],
      ]),
    );
    expect(u.mul_mat(v)).toEqual(
      Matrix.from(
        R.map2([
          [2, 1],
          [4, 2],
        ]),
      ),
    );
  });

  test("Case5", () => {
    const u = Matrix.from(
      R.map2([
        [3, -5],
        [6, 8],
      ]),
    );
    const v = Matrix.from(
      R.map2([
        [2, 1],
        [4, 2],
      ]),
    );
    expect(u.mul_mat(v)).toEqual(
      Matrix.from(
        R.map2([
          [-14, -7],
          [44, 22],
        ]),
      ),
    );
  });
});
