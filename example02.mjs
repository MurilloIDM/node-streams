import { createReadStream } from "fs";

let readStream = createReadStream("./.docs/data.txt");

let chucks = [];

readStream.on("readable", () => {
  let chuck;

  while (null !== (chuck = readStream.read())) {
    chucks.push(chuck);
  }
});

readStream.on("end", () => {
  console.log(chucks);
});
