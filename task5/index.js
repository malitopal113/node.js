const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Server is running');
    const url = req.url;
    console.log(url);

    if(url === "/index" || url === "/") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h2>Welcome to Home Page</h2>");
    }else if(url === "/about") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h2>Welcome to About Page</h2>");    
    }else if(url === "/contact") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h2>Welcome to Contact Page</h2>");
    }
    else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("<h2>404 Page Not Found</h2>");
        res.write("<a href='/index'>Go to Home Page</a>");
    }
    res.end();   
})

const port = 5000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})