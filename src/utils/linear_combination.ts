import { Vector } from "./Vector.class";
import { Field } from "./Type.class";

/*
 ** Time complexity: O(n)
 ** Space complexity: O(n)
 ** Computation depending on vectors length.
 **
 ** vectors = [[a1, a2], [b1, b2]]
 ** coefs = [c1, c2]
 ** linear_combination(vectors, coefs) = [[a1 * c1, a2 * c2], [b1 * c1, b2 * c2]]
 */

export const linear_combination = (vectors: Vector<Field>[], coefs: Field[]): Vector<Field> => {
  if (vectors.length !== coefs.length) {
    throw new Error("Vector sizes do not match");
  }
  return vectors.map((v, i) => v.scl(coefs[i])).reduce((a, b) => a.add(b));
};
