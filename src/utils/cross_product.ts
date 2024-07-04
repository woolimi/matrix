import { Vector } from "./Vector.class";
import { Field } from "./Type.class";

/*
 ** u = [a1, a2, a3]
 ** v = [b1, b2, b3]
 ** cross_product(u, v) = [a2*b3 - a3*b2, a3*b1 - a1*b3, a1*b2 - a2*b1]
 */
export const cross_product = (u: Vector<Field>, v: Vector<Field>): Vector<Field> => {
  if (u.size !== 3 || v.size !== 3) {
    throw new Error("Vectors must be 3D");
  }
  return Vector.from([
    u.value[1].mul(v.value[2]).sub(u.value[2].mul(v.value[1])),
    u.value[2].mul(v.value[0]).sub(u.value[0].mul(v.value[2])),
    u.value[0].mul(v.value[1]).sub(u.value[1].mul(v.value[0])),
  ]);
};
