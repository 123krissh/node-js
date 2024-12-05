//The http module in node js allow developers to create an HTTP server and handle client requests and server responses. 
//it provides methods and properties to work with http requests and responses, enabling the creation of 
//REST APIs, web page, and other networked applicatons.

//web server is s/w or h/w that servers web content to clients(usually browsers) over the internet or an internet. 
//It uses protocols like HTTP/HTTPS to handle requests and responses.

const http = require("http");

//web server

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>I'm Krishna Suthar</h1>");
        res.end();
    }

    if (req.url === "/source-code") {
        res.write("this is source code page 💻");
        res.end();
    }

    if (req.url === "/contact") {
        res.setHeader("Content-Type", "text/plain");
        res.write("this is contact page 📞");
        res.end();
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`🔥 Server is running on PORT ${PORT}`);;
});
