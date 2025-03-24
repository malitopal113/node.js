const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})     


const mw1 = (req, res, next) => {
    console.log('Middleware 1');
    next();
}
app.use(express.static('public'));
app.use(mw1);



app.get('/' , (req, res) => {

        res.sendFile(path.resolve(__dirname, 'temp/index.html'));



    
        // console.log('Server is running');
        // const photo = {
        //     id: 1,
        //     title: 'Node.js',   
        //     descrition: 'Node.js is a runtime environment for JavaScript that runs on the server.',
        //     url: 'https://nodejs.org/',
        // }

        // const url = req.url;

        // if(url === "/index" || url === "/") {
        //     res.send(photo);      
    }
)