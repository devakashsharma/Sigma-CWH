const fs = require("fs");

// const fs = require("fs/promises");

console.log("Starting");
fs.writeFile("fileName.txt", "Hello There",  () => {
    console.log("Done");
    fs.readFile("fileName.txt", (error, data) => {
        console.log(error, data.toString());
    })
})

console.log("Ending");

fs.appendFile("fileName.txt", " Learning Backend", (e, d) => {
    console.log(d.toString());
})