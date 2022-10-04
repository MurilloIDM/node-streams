import { createReadStream } from "fs";

const readStream = createReadStream("./.docs/data.txt");

setTimeout(() => {
  const data = readStream.read(10);
  console.log(data);
}, 3000);