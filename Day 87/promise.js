import fs from "fs/promises";

let readMyFile = await fs.readFile("fileName.txt");
console.log(readMyFile.toString());

// let writeMyFile = await fs.writeFile("fileName.txt", "New Text\n\n\n\nNewFile");
// console.log(writeMyFile);

let writeMyFile = await fs.appendFile("fileName.txt", "New Text\n\n\n\nNewFile");
console.log(writeMyFile);