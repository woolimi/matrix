import { Field, R } from "./Type.class";
import { Matrix } from "./Matrix.class";

// https://webglfundamentals.org/webgl/frustum-diagram.html
// Column-Major Order projection matrix
export const projection = (fov: number, ratio: number, near: number, far: number): Matrix<Field> => {
  if (near >= far) {
    throw new Error("near must be less than far");
  }

  const m = Matrix.from(new Array(4).fill(0).map(() => new Array(4).fill(new R(0))));
  // Column major order
  m.value[0][0] = new R(1 / (ratio * Math.tan(fov / 2)));
  m.value[1][1] = new R(1 / Math.tan(fov / 2));
  m.value[2][2] = new R((far + near) / (near - far));
  m.value[2][3] = new R(-1);
  m.value[3][2] = new R((2 * far * near) / (near - far));

  // Row major order
  // m.value[0][0] = new R(1 / (ratio * Math.tan(fov / 2)));
  // m.value[1][1] = new R(1 / Math.tan(fov / 2));
  // m.value[2][2] = new R((far + near) / (near - far));
  // m.value[2][3] = new R((2 * far * near) / (near - far));
  // m.value[3][2] = new R(-1);

  return m;
};
