const students = [{"photo":"https://robohash.org/fdgdf5345345","mark":4,"isDonePr":false,"_id":"617a81de99bd59276935f499","name":"Tolik","group":"","__v":0},{"photo":"https://robohash.org/fdgdf5345345","mark":0,"isDonePr":false,"_id":"617ab99899bd59276935f4a0","name":"Olha","group":"","__v":0},{"photo":"https://robohash.org/fdgdf5345345","mark":0,"isDonePr":false,"_id":"617ac2e199bd59276935f4a2","name":"stud","group":"","__v":0},{"photo":"https://robohash.org/fdgdf5345345","mark":0,"isDonePr":false,"_id":"617ac2e599bd59276935f4a3","name":"stud","group":"","__v":0},{"photo":"https://robohash.org/Danil","mark":0,"isDonePr":false,"_id":"617bdb3699bd59276935f4a4","name":"Danil","group":"RPZ 18 2/9","__v":0}];

module.exports = function(app){
    app.get('/', (req, res) => {
        res.json(students);
      })
      
      app.get('/', (req, res) => {
        res.send(students);
      })
}