import { Vector, linear_combination, R } from "../utils";

describe("Test ex01 - linear combination", () => {
  test("case1", () => {
    const result = linear_combination([Vector.from(R.map([-42, 42]))], R.map([-1]));

    // [-42, 42] * -1
    expect(result).toEqual(Vector.from(R.map([42, -42])));
  });

  test("case2", () => {
    const vectors = [Vector.from(R.map([-42])), Vector.from(R.map([-42])), Vector.from(R.map([-42]))];
    const coefs = R.map([-1, 1, 0]);
    const result = linear_combination(vectors, coefs);

    // [-42] * -1 + [-42] * 1 + [-42] * 0
    expect(result).toEqual(Vector.from(R.map([0])));
  });

  test("case3", () => {
    const vectors = [Vector.from(R.map([-42, 42])), Vector.from(R.map([1, 3])), Vector.from(R.map([10, 20]))];
    const coefs = R.map([1, -10, -1]);
    const result = linear_combination(vectors, coefs);

    expect(result).toEqual(Vector.from(R.map([-62, -8])));
  });

  test("case4", () => {
    const vectors = [Vector.from(R.map([-42, 100, -69.5])), Vector.from(R.map([1, 3, 5]))];
    const coefs = R.map([1, -10]);
    const result = linear_combination(vectors, coefs);

    expect(result).toEqual(Vector.from(R.map([-52, 70, -119.5])));
  });
});
