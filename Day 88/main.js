const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// app.get(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!, It\'s express')
})

app.get('/about', (req, res) => {
  res.send('Hello, It\'s me, Akash')
})

app.get('/contact', (req, res) => {
  res.send('Contact')
})

app.get('/me', (req, res) => {
  res.send('<h1>Hello Me</h1>')
})

app.get('/blog', (req, res) => {
  res.send('Hello blog')
})

app.get('/blog/:slug', (req, res) => {
  res.send(`Hello ${req.params.slug}`)
})

app.get('/blog/:slug/:second', (req, res) => {
  res.send(`Hello ${req.params.slug} and ${req.params.second}`)
})

app.get('/test', (req, res) => {
  res.send('<h1>Just Testing</h1>')
})

app.get('/test/nested-express', (req, res) => {
  res.send('<h1>Just Testing</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})