const path = require("path");

const filePath = "/Users/sergey/Desktop/node/index.js";
const txtFilePath = "/Users/sergey/Desktop/node/file.txt";
const relativePath = "./node/movie.mov";
const subfolder = "./node/subfolder";

console.log(path.isAbsolute(filePath)); // true
console.log(path.isAbsolute(txtFilePath)); // true
console.log(path.isAbsolute(relativePath)); // false

console.log(path.basename(filePath)); // index.js
console.log(path.basename(subfolder)); // subfolider

console.log(path.dirname(filePath)); // /Users/sergey/Desktop/node
console.log(path.dirname(subfolder)); // ./node

console.log(path.resolve(relativePath)); // /home/sergey/Documents/Node_js/node/movie.mov

console.log(path.extname(txtFilePath)); // .txt
console.log(path.extname(subfolder)); // ''

console.log(path.parse(filePath)); // {root: ...}
const parsedPath = path.parse(filePath);
const newPath = path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`);
console.log(newPath); // /Users/sergey/Desktop/node/renamed-index.mjs
