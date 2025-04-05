const express = require('express');
const ejs = require('ejs');
const app = express();
const Photo = require('./models/Photo');
const { default: mongoose } = require('mongoose');

//const path = require('path');

//template engine
app.set('view engine', 'ejs')

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/pcat-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB')
}).catch(err => {
    console.error('Error connecting to MongoDB', err)
})


const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})     





// routes
app.get('/' , async(req, res) => {
        const photos = await Photo.find({})
        res.render('index', {photos});
    }
)

app.get('/about' , (req, res) => {

    res.render('about');
}
)

app.get('/addphoto' , (req, res) => {

    res.render('addphoto');
}
)
app.get('/video-page', (req, res) => {
    res.render('video-page');
})

app.post('/photos' , async(req, res) => {
    await Photo.create(req.body)
    res.redirect('/')
})

