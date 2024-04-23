// const { createServer } = require('node:http'); // commom.js - if we use type: module in package.json file then this syntax won't work
// import http from "http"; // ecma script - it is a modern syntax

// import { a, b, c, d, e} from './mymodule.js';
// console.log(a, b, d, e, c); // 1 2 3 4 5

// import obj from "./mymodule.js";
// console.log(obj); // { x: 21, y: 23 }

// import obj1 from "./mymodule.js";
// console.log(obj1); // { x: 21, y: 23 }

// import akash from "./mymodule.js"; // obj1 (i'm assuming)
// console.log(akash); // { x: 21, y: 23 }

// But if we want to use the common.js then we have remove the type:module form the package,json then use the require syntax

const a = require("./mycommon.js")
console.log(a, __dirname, __filename);

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
// //   res.setHeader('Content-Type', 'text/plain');
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1> Hellow World </h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
