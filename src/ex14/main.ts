import { projection } from "../utils/projection";
import fs from "fs";

const degToRad = (deg: number) => (deg * Math.PI) / 180;
const m = projection(degToRad(110), 1, 3, 10);

const txt = m.value.map((row) => row.map((el) => el.value).join(", ")).join("\n");
console.log(txt);

fs.writeFileSync(`${__dirname}/proj`, txt);
