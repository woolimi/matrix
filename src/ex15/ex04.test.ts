import { Vector, C } from "../utils";

describe("Test ex04 - norm", () => {
  test("Case1 - Euclidean norm", () => {
    expect(Vector.from(C.map(["0"])).norm()).toEqual(C.from("0"));
    expect(Vector.from(C.map(["1", "2"])).norm()).toEqual(C.from("2.23606797749979"));
    expect(Vector.from(C.map(["1 + i", "2"])).norm()).toEqual(C.from("2.449489742783178"));
  });
  test("Case2 - Manhattan norm", () => {
    expect(Vector.from(C.map(["0"])).norm_1()).toEqual(C.from("0"));
    expect(Vector.from(C.map(["1", "2"])).norm_1()).toEqual(C.from("3"));
    expect(Vector.from(C.map(["1 + i", "1 + i"])).norm_1()).toEqual(C.from("2.8284271247461903"));
  });
  test("Case3 - Supremum", () => {
    expect(Vector.from(C.map(["1", "2", "3"])).norm_inf()).toEqual(C.from("3"));
    expect(Vector.from(C.map(["2 + i", "3 + 2i"])).norm_inf()).toEqual(C.from("3.605551275463989"));
  });
});
