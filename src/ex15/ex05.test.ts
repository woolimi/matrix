import { Vector, C, angle_cos } from "../utils";

describe("Test ex05 - cosine", () => {
  test("Case1", () => {
    expect(angle_cos(Vector.from(C.map(["1", "0"])), Vector.from(C.map(["0", "1"])))).toEqual(C.from("0"));
    expect(angle_cos(Vector.from(C.map(["8", "7"])), Vector.from(C.map(["3", "2"])))).toEqual(C.from("0.9914542955"));
    expect(angle_cos(Vector.from(C.map(["1 + i", "2 + i"])), Vector.from(C.map(["1 + i", "2 + i"])))).toEqual(
      C.from("1"),
    );
    expect(angle_cos(Vector.from(C.map(["1 + i", "2 + i"])), Vector.from(C.map(["1 + i", "2 + 2i"])))).toEqual(
      C.from("0.9561828875 + 0.2390457219i"),
    );
  });
});
