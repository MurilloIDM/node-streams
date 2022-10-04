import { createReadStream, ReadStream } from "fs";

const readStream = createReadStream("./.docs/data.txt");

readStream.on("data", chuck => {
  console.log("---------------------");
  console.log(chuck);
  console.log("---------------------");
});

readStream.on("open", () => {
  console.log("Stream opened...");
});

readStream.on("end", () => {
  console.log("Stream closed...");
});