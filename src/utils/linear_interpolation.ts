import { Vector } from "./Vector.class";
import { Matrix } from "./Matrix.class";
import { Field, R, C } from "./Type.class";

/*
 ** Time complexity: O(n)
 ** Space complexity: O(n)
 **
 ** lerp(u, v, t) = u + (v - u) * t
 */

export const lerp = (u: Field | Vector<Field> | Matrix<Field>, v: Field | Vector<Field> | Matrix<Field>, t: number) => {
  if (t < 0 || t > 1) {
    throw new Error("t must be between 0 and 1");
  }

  let _t = R.from(t);
  if (u instanceof Field) {
    _t = u instanceof R ? R.from(t) : C.from(t.toString());
  } else if (u instanceof Vector) {
    _t = u.value[0] instanceof R ? R.from(t) : C.from(t.toString());
  } else if (u instanceof Matrix) {
    _t = u.value[0][0] instanceof R ? R.from(t) : C.from(t.toString());
  }

  if (u instanceof Field && v instanceof Field) {
    return u.add(v.sub(u).mul(_t));
  } else if (u instanceof Vector && v instanceof Vector) {
    return u.add(v.sub(u).scl(_t));
  } else if (u instanceof Matrix && v instanceof Matrix) {
    return u.add(v.sub(u).scl(_t));
  }

  throw new Error("u and v must be both Field or both Vector or both Matrix");
};
