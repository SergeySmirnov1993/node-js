import { EventEmitter } from "events";
import fs from "fs";

const fileEmitter = new EventEmitter();
const filePath = "./first.txt";

fileEmitter.on("writeComplete", () => {
  console.log(`File ${filePath} was written`);
  fs.appendFile(filePath, "\nSecond line text", () => {
    fileEmitter.emit("appendComplete");
  });
});

fileEmitter.on("appendComplete", () => {
  console.log(`Append text to the ${filePath}`);
  fs.rename(filePath, "./renamed-file.txt", () => {
    fileEmitter.emit("renamedComplete");
  });
});

fileEmitter.on("renamedComplete", () => {
  console.log("File was renamed");
});

fs.writeFile(filePath, "First line text", () => {
  fileEmitter.emit("writeComplete");
});
