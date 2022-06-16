const http = require('http');
const app = require('./app');
const port = 5555;

//Creation of server with http method.
const server = http.createServer(app);

//This server will listen to the port 555
server.listen(port);