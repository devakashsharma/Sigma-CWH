const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('Blogs home page')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About Blogs')
})

router.get('/blog/:slug', (req, res) => {
  res.send(`fetch the data from blog ${req.params.slug}`)
})

module.exports = router