import { Vector, linear_combination, R } from "../utils";

describe("Test ex01", () => {
  test("case1", () => {
    const vectors = [Vector.from(R.map([1, 0, 0])), Vector.from(R.map([0, 1, 0])), Vector.from(R.map([0, 0, 1]))];
    const coefs = R.map([10, -2, 0.5]);
    const result = linear_combination(vectors, coefs);

    // [1,0,0] * 10 + [0,1,0] * -2 + [0,0,1] * 0.5
    expect(result).toEqual(Vector.from(R.map([10, -2, 0.5])));
  });

  test("case2", () => {
    const vectors = [Vector.from(R.map([1, 2, 3])), Vector.from(R.map([0, 10, -100]))];
    const coefs = R.map([10, -2]);
    const result = linear_combination(vectors, coefs);

    // [1,2,3] * 10 + [0,10,-100] * -2
    expect(result).toEqual(Vector.from(R.map([10, 0, 230])));
  });
});
