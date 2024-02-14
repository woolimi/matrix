import { Vector } from "../utils";
import { yellow } from "console-log-colors";

const testAdd = (a: number[], b: number[]) => {
  console.log(yellow("===================="));
  const va = Vector.from(a);
  const vb = Vector.from(b);
  console.log("Add:", va, vb);
  console.log("Result:", va.add(vb));
};

const testSub = (a: number[], b: number[]) => {
  console.log(yellow("===================="));
  const va = Vector.from(a);
  const vb = Vector.from(b);

  console.log("Sub:", va, vb);
  console.log("Result:", va.sub(vb));
};

const textScl = (a: number[], b: number) => {
  console.log(yellow("===================="));
  const va = Vector.from(a);

  console.log("Scl:", va, b);
  console.log("Result:", va.scl(b));
};

testAdd([2, 3], [5, 7]);
testSub([2, 3], [5, 7]);
textScl([2, 3], 5);
