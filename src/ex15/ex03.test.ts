import { Vector, C } from "../utils";

describe("Test ex03 - dot product", () => {
  test("case1", () => {
    const u = Vector.from(C.map(["0", "0"]));
    const v = Vector.from(C.map(["0", "0"]));
    expect(u.dot(v)).toEqual(C.from("0"));
  });
  test("case2", () => {
    const u = Vector.from(C.map(["1 + i", "2"]));
    const v = Vector.from(C.map(["1", "i"]));
    expect(u.dot(v)).toEqual(C.from("1 + 3i"));
  });
  test("case3", () => {
    const u = Vector.from(C.map(["1 + i", "2 + i"]));
    const v = Vector.from(C.map(["1", "i + 1"]));
    expect(u.dot(v)).toEqual(C.from("2 + 4i"));
  });
});
