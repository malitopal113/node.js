const express = require('express');
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})      

app.get('/' , (req, res) => {
        console.log('Server is running');
        const photo = {
            id: 1,
            title: 'Node.js',   
            descrition: 'Node.js is a runtime environment for JavaScript that runs on the server.',
            url: 'https://nodejs.org/',
        }

        const url = req.url;

        if(url === "/index" || url === "/") {
            res.send(photo);      
    }
}
)