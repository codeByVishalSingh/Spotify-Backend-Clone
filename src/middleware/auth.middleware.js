const jwt = require("jsonwebtoken")


const authArtist = async (req,res,next)=>{
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"Unauthorized User"
        })
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        if(decoded.role !== "artist"){
            return res.status(403).json({message: "You Are Not A Artist"});
    
        }

        req.user = decoded;
              next();

    } catch (error) {
          console.log(error);
          return res.status(401).json({message: "User Unauthorized"})
             
    }
}



const authUser = async ()=>{
    const token = req.cookies.token;

    if(!token){
        res.status(401).json({message: "User Unauthorized"})
    }

    try {
        
        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        if(decoded.role !== "user" && decoded.role !== "artist"){
             return res.status(401).json({ message: "You can not the Access"})
        }

        req.user = decoded;
        next();
    } catch (error) {
       return res.status(401).json({
            message:"Unauthorized"
        })
    }
}
module.exports ={authArtist,authUser}