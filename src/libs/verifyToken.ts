import {Request , Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'


export const tokenValidator = (req:Request, res:Response, next:NextFunction)=>{

    const token =  req.header('token')
    if(!token){
        return res.status(401).json('access denied')
    }

   const payload =  jwt.verify(token, process.env.SECRET_KEY || 'secret')
   console.log(payload)
    next()
}