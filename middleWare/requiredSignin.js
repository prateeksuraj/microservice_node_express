const jwt=require('jsonwebtoken');

exports.isAuth=(req,res,next)=>{
    let token=req.headers["authorization"];
    console.log(token);
    if(token){
        jwt.verify(token,process.env.JWT_SECRET, function(err,decoded){
            if(err){
                res.json({
                    success:false,
                    message:'Failed to authenticate your token'
                });
            } else {
                
                req.auth=decoded;
                next();
            }
        })
    } else {
        res.status(403).json({
            success:false,
            message:'no token provided'
        })
    }
}

  