import { Vector } from "./Vector.class";
import { Field } from "./Type.class";

export const linear_combination = (vectors: Vector<Field>[], coefs: Field[]) => {
  if (vectors.length !== coefs.length) {
    throw new Error("Vector sizes do not match");
  }
  return vectors.map((v, i) => v.scl(coefs[i].value)).reduce((a, b) => a.add(b));
};
