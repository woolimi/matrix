import { linear_combination, Vector, C } from "../utils";

describe("Test ex01 - linear combination", () => {
  test("case1", () => {
    const vectors = [
      Vector.from(C.map(["1 + i", "0", "0"])),
      Vector.from(C.map(["0", "1 + 2i", "0"])),
      Vector.from(C.map(["0", "0", "1"])),
    ];

    const coefs = C.map(["1", "2", "3"]);
    const result = linear_combination(vectors, coefs);

    // [1,0,0] * 10 + [0,1,0] * -2 + [0,0,1] * 0.5
    expect(result).toEqual(Vector.from(C.map(["1 + i", "2 + 4i", "3"])));
  });

  test("case2", () => {
    const vectors = [Vector.from(C.map(["1", "2 + i", "3"])), Vector.from(C.map(["0", "10", "-100"]))];
    const coefs = C.map(["10i", "-2"]);
    const result = linear_combination(vectors, coefs);

    // V([1, 2+i, 3] * 10i) + V([0, 10, -100] * -2)
    expect(result).toEqual(Vector.from(C.map(["10i", "-30 + 20i", "200 + 30i"])));
  });
});
