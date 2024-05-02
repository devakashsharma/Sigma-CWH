const express = require('express')
const app = express()
const port = 3000

const blog = require("./routes/blog");

app.use(express.static("public"))
app.use("/blog", blog);

// Middleware 1
app.use((req, res, next) => {
    // console.log("middleware1");
    // res.write(`M1 is dominating The Entire Page`)
    console.log(`${Date.now()} is a ${req.method}`);
    next();
})

// Middleware 2
app.use((req, res, next) => {
    console.log("middleware2");
    next();
})

app.get('/', (req, res) => {
    res.send("Hey There!");
})

app.listen(port, () => {
    console.log(`http://127.0.0.1:3000`);
})