const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('Shops home page')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About Shops')
})

router.get('/about/:slug', (req, res) => {
  res.send(`fetching data from about ${req.params.slug}`)
})

module.exports = router