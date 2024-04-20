const http = require('http');

const PORT = 3020;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {

  // Home Page
  // About Page
  //  Contact Page
  // Product Page
  // Rest... > Eroor

  if (req.url == '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end();

  } else if (req.url == '/about'){
    
  } else if (req.url == '/contact'){
    
  } else if (req.url == '/prosuct'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ProductName: "Product 1"}));
    
  } else {
    
  }
  // res.statusCode = 500;
  // res.setHeader('Content-Type', 'application/json');
  // // res.end('Node server is created by Rajnish Pandey');
  // res.end(JSON.stringify({error: "server Error!"}));
});

server.listen(PORT, () => {
  console.log(`server running at ${HOSTNAME}:${PORT} `);
});