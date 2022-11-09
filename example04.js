const { createWriteStream } = require("fs");
const { join } = require("path");

const stream = createWriteStream(join(__dirname, ".docs", "write_file.txt"));

for (let x = 0; x < 1e6; x++) {
  stream.write("Muito legal esse texto\n");
}


stream.end();

stream.on("close", () => console.log("finalizou a escrita"));