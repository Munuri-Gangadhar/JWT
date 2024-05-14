const jwt=require('jsonwebtoken');
const secretkey="gangadhar";

function authenticateToken(req,res){
    const authHeader=req.header('Authorization');
    if(!authHeader){
        return res.status(401).json({message:'UnauthorizedL:Missing token!'});
    }
    const [bearer,token]=authHeader.split(' '); 
    if(bearer!=='Bearer' && !token){
        return res.status(401).json({message:'Unauthorized:Invalid token format'});
    }
    jwt.verify(token,secretkey,(err,user)=>{
        if(err){
            return res.status(403).json({message:'Forbidden:Invalid Token'});
        }
        req.user=user;
        next();
    })
}

function verifyToken(token){
    return jwt.verify(token,secretkey);
}
module.exports={authenticateToken,verifyToken};