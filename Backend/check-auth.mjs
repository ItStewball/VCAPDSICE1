import jwt from "jsonwebtoken"

const checkauth=(req,res,next) =>
    {
        try{
            const token = req.headers.authorization.split(" ")[1]
            jwt.verify(token, "this-should-be-more-secure-but-oh-well")
            next()
        }catch(error){
            res.status(401).json({
                message:"token invalid"
            })
        }
    } 

    export default checkauth