var Userdb = require('../model/model');

//create and save new user 
exports.create = (req,res)=>{
    //validate request
    if(!req.body){
     res.status(400).send ({message:"Content can not be empty!!"})
     return;
    }

//new user
console.log(req.body);
const user = new Userdb({
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    status:req.body.status

})
console.log(user);
//save user in the database 
user
.save()
.then(data => {
  res.send(data);
})
.catch(err => {
  res.status(500).send({
    message: err.message || "Some error occurred while creating a create operation."
  });
});


}


//retrieve and return all users 
exports.find = (req,res) =>{

}

//Update a new idetified user by user id 
exports.update  = (req,res) =>{

}

//delete a user with specified user id in the request
exports.delete   = (req,res) =>{

}