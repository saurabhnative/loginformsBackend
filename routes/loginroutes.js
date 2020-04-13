var jsonfile = require('jsonfile');

exports.register = function(req,res){
  var today = new Date();
   var users={
     "first_name":req.body.first_name,
     "last_name":req.body.last_name,
     "userid":req.body.userid,
     "password":req.body.password,
     "role":req.body.role,
     "created":today,
     "modified":today
   }
}

exports.login = function(req,res){
  var email= req.body.email;
  var password = req.body.password;
  console.log(email, password);
  res.send({
    "code":200,
    "success":"login sucessfull"
  })
}
