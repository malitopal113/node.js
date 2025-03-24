const koa = require('koa');
const app = new koa();

app.use(async (ctx, next) => {
    console.log('Server is running');
    const url = ctx.url;
    console.log(url);

    if(url === "/index" || url === "/") {
        ctx.body = "<h2>Welcome to Home Page</h2>";
    }else if(url === "/about") {
        ctx.body = "<h2>Welcome to About Page</h2>";
    }else if(url === "/contact") {
        ctx.body = "<h2>Welcome to Contact Page</h2>";
    }else {
        ctx.body = "<h2>404 Page Not Found</h2>";
        ctx.body += "<a href='/index'>Go to Home Page</a>";

    }
    await next();
})

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})