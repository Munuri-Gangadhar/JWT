const authService=require('../services/login');

async function login(req,res){
    try{
        const {email,password}=req.body;
        const token=await authService.login(email,password);
        res.json({token:token});
    }catch(error){
        res.status(400).json({message:'Invalid credentials'});
    }
}

async function refreshToken(req,res){
    try{
        const {token}=req.body;
        const newToken=await authService.refreshToken(token);
        res.json({newToken:newToken});

    }catch(error){
        res.status(400).json({message:'Invalid credentials'});
    }
}

module.exports={login,refreshToken};