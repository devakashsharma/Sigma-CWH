// const express = require("express");
// const app = express();
// const port = 3000;

// app.use(express.static("public"))

// app.get('/', (req, res) => {
//   console.log("Hey its a get request");
//   res.send("Hello World! get");
// });

// app.post('/', (req, res) => {
//   console.log("Hey its a post request");
//   res.send("Hello World! post");
// });

// app.put('/', (req, res) => {
//   console.log("Hey its a put request")
//   res.send('Hello World put!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

const express = require('express')
const app = express()
const blog = require("./routes/blog")
const shop = require("./routes/shop")
const port = 3000

app.use("/blog", blog)
app.use("/shop", shop)

app.use(express.static("public"))

app.get('/', (req, res) => {
    console.log("Hey its a get request")
    res.send('Hello World get!')
}).post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello World post!')
}).put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello World put!')
})

app.get('/index', (req, res) => {
  // res.send('Hello World! Watashi wa Index.html') // if want to send the .html page the use sendFile()
  res.sendFile("templates/index.html", {root: __dirname})
})

app.get('/api', (req, res) => {
  res.json({a: 1, b: 2, c: 3, d: 4})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})