const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/jwt');

mongoose.connection.on('connected',()=>{
    console.log("mongodb is connected");
});

mongoose.connection.on('error',(err)=>{
   console.log(`mongodb connection error ${err}`);
});

module.exports=mongoose;