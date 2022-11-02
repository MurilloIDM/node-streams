const { createReadStream } = require("fs");
const { join } = require("path");

const readableStream = createReadStream(join(__dirname, "/.docs", "data.txt"), { encoding: "utf-8" });

let data = "";

readableStream
  .on("data", (chuck) => {
    data += chuck;
    console.log("passou")
  })
  .on("pause", () => {
    console.log("Paroou")
  })
  .on("end", () => {
    console.log(data.toString().split("\n"));
    console.log("Terminou a leitura");
  });

readableStream.pause();