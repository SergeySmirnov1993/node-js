import fs from "fs";
import path from "path";

const sourceDir = "./files";
const destinationDir = "./files-copy";

if (!fs.existsSync(sourceDir)) {
  console.warn(`Source dir ${sourceDir} doesn't exist!`);
  console.log("Existing...");
  process.exit(0);
}

if (fs.existsSync(destinationDir)) {
  fs.rmSync(destinationDir, { recursive: true });
  console.log("Destinatino dir removed");
}

fs.mkdirSync(destinationDir);

fs.readdir(sourceDir, (err, fileNames) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  fileNames.forEach((fileName, index) => {
    const sourceFilePath = path.join(sourceDir, fileName);
    const destinationFilePath = path.join(
      destinationDir,
      `${index + 1}. ${fileName}`
    );

    const readFileStream = fs.createReadStream(sourceFilePath);
    const writeFileStream = fs.createWriteStream(destinationFilePath);

    readFileStream.pipe(writeFileStream);

    writeFileStream.on("finish", () => {
      console.log(`File ${fileName} was copied`);
    });
  });
});