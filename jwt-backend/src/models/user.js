const mongoose=require('../configuration/db');

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{type:String,enum:['admin','customer'],default:'customer'}
});

module.exports=mongoose.model('User',userSchema);
