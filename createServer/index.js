const http = require('http');

const server = http.createServer((req,res) => {
    console.log('Server is running');
    const url = req.url;
    console.log(url);
    if (url === "/") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Welcome to Home Page</h1>");
    } else if (url === "/about") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Welcome to About Page</h1>");
    }else if (url === "/contact") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Welcome to Contact Page</h1>");
    } else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("<h1>404 Page Not Found</h1>");
        res.write("<a href='/'>Go to Home Page</a>");   
   
    }
    res.end();
})


const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})