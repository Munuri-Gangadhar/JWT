const User=require('../models/user');
const bcrypt=require('bcrypt');

async function createUser(userData){
     const {name,email,password}=userData;
     const hashPassword=await bcrypt.hash(password,10);
     const createUser=new User({
        name,email,password:hashPassword,role:'customer'
     });
    const saveUser=await createUser.save();
    return saveUser;
}

module.exports={createUser};