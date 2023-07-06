var Userdb = require('../model/model');

// Create and save a new user
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!!" });
    return;
  }
  // Create a new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.Email,
    gender: req.body.Gender,
    status: req.body.Status
  });
  // Save the user in the database
  user.save()
    .then(data => {
      //res.send(data);
      res.redirect('/');
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating a create operation."

      });
    });
};

// Retrieve and return all users retrive and return a single user 
exports.find = (req, res)=>{

  if(req.query.id){
      const id = req.query.id;

      Userdb.findById(id)
          .then(data =>{
              if(!data){
                  res.status(404).send({ message : "Not found user with id "+ id})
              }else{
                  res.send(data)
              }
          })
          .catch(err =>{
              res.status(500).send({ message: "Erro retrieving user with id " + id})
          })

  }else{
      Userdb.find()
          .then(user => {
              res.send(user)
          })
          .catch(err => {
              res.status(500).send({ message : err.message })
          })
  }

  
}


// Update an identified user by user ID
exports.update = (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  Userdb.findByIdAndUpdate(id, updates, { new: true })
    .then(updatedUser => {
      if (!updatedUser) {
        res.status(404).send({ message: `Cannot update user with id=${id}. User not found.` });
      } else {
        res.send(updatedUser);
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error updating user with id=${id}`
      });
    });
};

// Delete a user with the specified user ID
exports.delete = (req, res) => {
  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
    .then(deletedUser => {
      if (!deletedUser) {
        res.status(404).send({ message: `Cannot delete user with id=${id}. User not found.` });
      } else {
        res.send({ message: "User deleted successfully!" });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error deleting user with id=${id}`
      });
    });
};


// Update an identified user by user ID
exports.update = (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  Userdb.findByIdAndUpdate(id, updates, { new: true })
    .then(updatedUser => {
      if (!updatedUser) {
        res.status(404).send({ message: `Cannot update user with id=${id}. User not found.` });
      } else {
        res.send(updatedUser);
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error updating user with id=${id}`
      });
    });
};

// Delete a user with the specified user ID
exports.delete = (req, res) => {
  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
    .then(deletedUser => {
      if (!deletedUser) {
        res.status(404).send({ message: `Cannot delete user with id=${id}. User not found.` });
      } else {
        res.send({ message: "User deleted successfully!" });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error deleting user with id=${id}`
      });
    });
};
