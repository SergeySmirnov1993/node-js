// node create-file.mjs <fileName> <linesQty>
import fs from "fs";
import path from "path";

const fileName = process.argv[2];
const linesQty = parseInt(process.argv[3]);

if (!fileName || !linesQty) {
  console.log("fileNmae and linesQty must be supplied as arguments");
  process.exit(0);
}

const writeStream = fs.createWriteStream(path.join("./files", fileName));

console.log("Start", performance.now());

for (let i = 1; i <= linesQty; i++) {
  writeStream.write(
    `This is a line number ${i} in the atomatically generated file\n`
  );
}

console.log("End", performance.now());
setTimeout(() => console.log("Timeout", performance.now()), 0);

writeStream.end(() => {
  console.log(`Automatically generated file ${fileName} was created`);
});
