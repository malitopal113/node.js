const express = require('express');
const ejs = require('ejs');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Post = require('./models/Post');



// template engine ejs
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// mongodb conncet
mongoose.connect('mongodb://localhost:27017/cleanblog-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {console.log('connected to mongodb')
})  .catch(err => {'Error connecting to mongo db', err})

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

app.get('/blog', (req, res) => {
    res.render('blog');
})


app.get('/contact', (req, res) => {
    res.render('contact');
})

app.get('/edit', (req, res) => {
    res.render('edit');
})

app.get('/', async (req, res) => {
    const posts = await Post.find({});
    res.render('index', { posts });
})
app.get('/post', (req, res) => {
    res.render('post');
})

app.get('/posts', (req, res) => {
    res.render('posts');
})


app.post('/posts', async (req, res) => {
    await Post.create(req.body);
    res.redirect('/');
})