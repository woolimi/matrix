import { C } from "../utils";

describe("Complex type test", () => {
  test("should throw error for invalid complex number format", () => {
    expect(() => new C("asdf")).toThrow("Invalid complex number: 'asdf'");
    expect(() => new C("a+bi")).toThrow("Invalid complex number: 'a+bi'");
    expect(() => new C("a-bi")).toThrow("Invalid complex number: 'a-bi");
  });

  test("should parse valid complex number formats", () => {
    expect(new C("2 + 3i")).toEqual({ n: 2, i: 3, value: "2 + 3i" });
    expect(new C("2")).toEqual({ n: 2, i: 0, value: "2" });
    expect(new C("3i")).toEqual({ n: 0, i: 3, value: "3i" });
    expect(new C("-i+1")).toEqual({ n: 1, i: -1, value: "-i+1" });
    expect(new C("2 - 3i")).toEqual({ n: 2, i: -3, value: "2 - 3i" });
    expect(new C("2.3 - 3.4i")).toEqual({ n: 2.3, i: -3.4, value: "2.3 - 3.4i" });
  });

  test("Test complex number calculation", () => {
    const ca = new C("2 + 3i");
    const cb = new C("1 - 2i");
    expect(ca.add(cb)).toEqual({ n: 3, i: 1, value: "" });
    expect(ca.sub(cb)).toEqual({ n: 1, i: 5, value: "" });
    expect(ca.mul(cb)).toEqual({ n: 8, i: -1, value: "" });
  });
});
