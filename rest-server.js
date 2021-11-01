const express = require('express');

  app = express();
  routes = require('./routes.js');

const students = [{"photo":"https://robohash.org/fdgdf5345345","mark":4,"isDonePr":false,"_id":"617a81de99bd59276935f499","name":"Tolik","group":"","__v":0},{"photo":"https://robohash.org/fdgdf5345345","mark":0,"isDonePr":false,"_id":"617ab99899bd59276935f4a0","name":"Olha","group":"","__v":0},{"photo":"https://robohash.org/fdgdf5345345","mark":0,"isDonePr":false,"_id":"617ac2e199bd59276935f4a2","name":"stud","group":"","__v":0},{"photo":"https://robohash.org/fdgdf5345345","mark":0,"isDonePr":false,"_id":"617ac2e599bd59276935f4a3","name":"stud","group":"","__v":0},{"photo":"https://robohash.org/Danil","mark":0,"isDonePr":false,"_id":"617bdb3699bd59276935f4a4","name":"Danil","group":"RPZ 18 2/9","__v":0}];

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