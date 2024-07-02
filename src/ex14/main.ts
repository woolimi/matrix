import { projection } from "../utils/projection";
import fs from "fs";

const degToRad = (deg: number) => (deg * Math.PI) / 180;
const m = projection(degToRad(70), 1, 1, 20);

const txt = m.value.map((row) => row.map((el) => el.value).join(", ")).join("\n");
console.log(txt);

fs.writeFileSync(`${__dirname}/proj`, txt);
