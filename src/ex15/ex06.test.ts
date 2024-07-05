import { Vector, C, cross_product } from "../utils";

describe("Test ex06", () => {
  test("Case1", () => {
    expect(cross_product(Vector.from(C.map(["0", "0", "0"])), Vector.from(C.map(["0", "0", "0"])))).toEqual(
      Vector.from(C.map(["0", "0", "0"])),
    );
  });
  test("Case2", () => {
    expect(cross_product(Vector.from(C.map(["1", "i", "2 + i"])), Vector.from(C.map(["1 + i", "2", "1"])))).toEqual(
      Vector.from(C.map(["-4 -i", "3i", "3 - i"])),
    );
  });

  test("Case3", () => {
    expect(
      cross_product(Vector.from(C.map(["1 + i", "2 + i", "3"])), Vector.from(C.map(["4 + 2i", "5 + 3i", "6 + 1i"]))),
    ).toEqual(Vector.from(C.map(["-4 - i", "7 - i", "-4"])));
  });
});
