User = require("./models/UserModel")

module.exports = function(app){
    app.get('/', (req, res) => {
      User.find((err, users)=>{
        if(err)
          res.send(err);

        res.json(users);
      });
    })
      
    app.get('/', (req, res) => {
      res.send(users);
    })
}