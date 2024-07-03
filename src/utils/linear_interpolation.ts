import { Vector } from "./Vector.class";
import { Matrix } from "./Matrix.class";
import { Field } from "./Type.class";

/*
 ** Time complexity: O(n)
 ** Space complexity: O(n)
 */

export const lerp = (u: Field | Vector<Field> | Matrix<Field>, v: Field | Vector<Field> | Matrix<Field>, t: number) => {
  if (t < 0 || t > 1) {
    throw new Error("t must be between 0 and 1");
  }
  if (u instanceof Field && v instanceof Field) {
    return u.add(v.sub(u).scl(t));
  } else if (u instanceof Vector && v instanceof Vector) {
    return u.add(v.sub(u).scl(t));
  } else if (u instanceof Matrix && v instanceof Matrix) {
    return u.add(v.sub(u).scl(t));
  }

  throw new Error("u and v must be both Field or both Vector or both Matrix");
};
