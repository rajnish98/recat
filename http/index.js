const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url == '/' ) {
    res.write('<h1>Hello Node.js!</h1>');
  } else if (req.url == '/about') {
    res.write('<h1>about page</h1>');
  }
  res.end();
})

server.listen(5001);

console.log('The Http server is running on port1 5001');