const express = require('express');
const ejs = require('ejs');
const app = express();
const path = require('path');


// template engine ejs
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));

//Routes


const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);    
})



app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/add_post', (req, res) => {
    res.render('add_post');
})

app.get('/add', (req, res) => {
    res.render('add');
})


app.get('/blog', (req, res) => {
    res.render('blog');
})


app.get('/contact', (req, res) => {
    res.render('contact');
})

app.get('/edit', (req, res) => {
    res.render('edit');
})

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/post', (req, res) => {
    res.render('post');
})

app.get('/posts', (req, res) => {
    res.render('posts');
})


