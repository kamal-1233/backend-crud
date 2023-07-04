const mangoose = require('mongoose');

var schema = new mangoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    gender:{type:String},
    status:{type:String} 
})

const Userdb = mangoose.model('userdb',schema);

module.exports = Userdb;