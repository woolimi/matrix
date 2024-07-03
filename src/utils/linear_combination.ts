import { Vector } from "./Vector.class";
import { Field } from "./Type.class";

/*
 ** Time complexity: O(n)
 ** Space complexity: O(n)
 ** Computation depending on vectors length.
 */

export const linear_combination = (vectors: Vector<Field>[], coefs: Field[]) => {
  if (vectors.length !== coefs.length) {
    throw new Error("Vector sizes do not match");
  }
  return vectors.map((v, i) => v.scl(coefs[i])).reduce((a, b) => a.add(b));
};
