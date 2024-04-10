import { Vector, Field } from ".";

// cos α = 	a·b / |a|·|b|

export const angle_cos = (u: Vector<Field>, v: Vector<Field>): Field => {
  return u
    .dot(v)
    .div(u.norm().mul(v.norm()))
    .apply((v: number) => parseFloat(v.toFixed(10).toString()));
};
