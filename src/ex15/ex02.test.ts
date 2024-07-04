import { lerp, Vector, Matrix, C } from "../utils";

describe("Test ex02 - linear interpolation", () => {
  test("case1", () => {
    expect(lerp(Vector.from(C.map(["-42i", "42"])), Vector.from(C.map(["42", "-42"])), 0.5)).toEqual(
      Vector.from(C.map(["21 - 21i", "0"])),
    );
    expect(
      lerp(
        Matrix.from(
          C.map2([
            ["-42i", "42"],
            ["-42", "42"],
          ]),
        ),
        Matrix.from(
          C.map2([
            ["42", "-42"],
            ["42", "-42i"],
          ]),
        ),
        0.5,
      ),
    ).toEqual(
      Matrix.from(
        C.map2([
          ["21 - 21i", "0"],
          ["0", "21 - 21i"],
        ]),
      ),
    );
  });
});
