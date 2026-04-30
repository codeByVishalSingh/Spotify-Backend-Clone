const musicModel = require("../models/music.model.js")
const jwt = require("jsonwebtoken")


const createMusic = async (req,res)=>{
 
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message:"User not Vaild"})
    }
    try {
           const decoded = jwt.verify(token, process.env.JWT_SECRET)
           if(decoded.role !== 'artist'){
            return res.status(403).json({message:"You are not a Artist"})
           }
        
    } catch (error) {
        return res.status(401).json({meassage: "Unauthorized User"})
    }

    const {title}= req.body;
    const file = req.file
}