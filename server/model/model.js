const mangoose = require('mongoose');

var schema = new mangoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    gender:String,
    status:String 
})

const Userdb = mangoose.model('userdb',schema);

module.exports = Userdb;