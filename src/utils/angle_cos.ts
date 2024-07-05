import { Vector, Field } from ".";

/*
 ** angle_cos
 ** Calculate the cosine of the angle between two vectors
 **
 ** Time complexity: O(n)
 ** Space complexity: O(n)
 **
 ** a·b = |a| * |b| cos α
 ** cos α = a·b / |a| * |b|
 */

export const angle_cos = (u: Vector<Field>, v: Vector<Field>): Field => {
  return u.dot(v).div(u.norm().mul(v.norm())).trim();
};
