const { createReadStream, createWriteStream, read } = require("fs");
const { join } = require("path");

const readStream = createReadStream(join(__dirname, ".docs", "data.txt"));
const writeStream = createWriteStream(join(__dirname, ".docs", "write_file_2.txt"));

readStream.pipe(writeStream);