const express = require('express');
const ejs = require('ejs');
const app = express();

//const path = require('path');

//template engine
app.set('view engine', 'ejs')

// middleware
app.use(express.static('public'));




const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})     





// routes
app.get('/' , (req, res) => {

        res.render('index');
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

