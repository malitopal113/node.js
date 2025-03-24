const express = require('express');
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);    
})

app.get('/', (req, res) => {
    console.log('Server is running');
   const  blog = { 
        id: 1, 
        title: "Blog title", 
        description: "Blog description" 
    }
    const url = req.url;
    if(url === "/index" || url === "/") {
        res.status(200).send(blog)
    }else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("<h1>404 Page Not Found</h1>");
        res.write("<a href='/'>Go to Home Page</a>");
    }


    
}
)