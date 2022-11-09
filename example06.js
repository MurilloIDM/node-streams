const { createWriteStream } = require("fs");
const { join } = require("path");

const readable = process.stdin;
const writable = createWriteStream(join(__dirname, ".docs", "log.txt"));

readable.setEncoding("utf-8");

readable.on("data", (chuck) => {
  const option = chuck.toString().replace(/[\n\t]/, "");

  const user = process?.env?.USER;
  writable.write(`[${user}]-${new Date().toLocaleDateString("pt-br", { dateStyle: "medium" })}: ${option}\n`);

  if (option === "exit") readable.pause();
});

readable.on("pause", () => console.log("Teclado desligado..."));