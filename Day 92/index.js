const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

// after writing siteName, blog post we will rename the template an index.html to view/index.ejs

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = ["Hey", "Hello"]
    res.render("index", { siteName: siteName, searchText: searchText, arr })
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas why and when?"
    let blogContent = "Its a very good brand"
    res.render("blogpost", {blogTitle: blogTitle, blogContent: blogContent})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})