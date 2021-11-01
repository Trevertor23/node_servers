const express = require('express');
  app = express();
  routes = require('./routes-mongo.js');
  mongoose = require('mongoose');
  User = require('./models/UserModel')

  mongoose.connect('mongodb://localhost/users_db');


routes(app);
app.listen(3330);






// const server = http.createServer((req, res) => {
    
//     if(req.url=='/students'){
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/json');
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         res.end(JSON.stringify(students));
//     }
//   });
  
  // server.listen(port, hostname, () => {
  //   console.log(`Server running at http://${hostname}:${port}/`);
  // });

//const http = require('http');
//const hostname = '127.0.0.1';
//const port = '3030';