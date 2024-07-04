import { Matrix, C } from "../utils";

describe("Test ex13 - Rank", () => {
  test("Case1", () => {
    const u = Matrix.from(
      C.map2([
        ["i", "0", "0"],
        ["0", "i + 1", "0"],
        ["0", "0", "i"],
      ]),
    );
    expect(u.rank()).toEqual(3);
  });
  test("Case2", () => {
    const u = Matrix.from(
      C.map2([
        ["i", "i + 1", "0"],
        ["i", "i + 1", "0"],
        ["0", "0", "i"],
      ]),
    );
    expect(u.rank()).toEqual(2);
  });
  test("Case3", () => {
    const u = Matrix.from(
      C.map2([
        ["i", "i + 1", "2i + 3"],
        ["i", "i + 1", "2i + 3"],
        ["2i", "2i + 2", "4i + 6"],
      ]),
    );
    expect(u.rank()).toEqual(1);
  });
  test("Case3", () => {
    const u = Matrix.from(
      C.map2([
        ["0", "0", "0"],
        ["0", "0", "0"],
        ["0", "0", "0"],
      ]),
    );
    expect(u.rank()).toEqual(0);
  });
});
