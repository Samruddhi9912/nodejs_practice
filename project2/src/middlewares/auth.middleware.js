const jwt = require("jsonwebtoken");
const albumModel = require("../models/album.model");


async function authArtist(req,res,next) {
    const token = req.cookies.token;

    if (!token){
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

    try{

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (decoded.role !== "artist"){
            return res.status(403).json({
                message: "You don't have access"
            })
        }
        next();
    }
    catch(error){
        console.error();

        return res.status(401).json({
            message: "Unauthorized"
        })
        
    }
}

module.exports = { authArtist }