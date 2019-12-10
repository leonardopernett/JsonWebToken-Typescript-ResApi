import {Request, Response } from 'express'

import User from'../models/user';
import jwt from 'jsonwebtoken'


export  async  function signup(req:Request, res:Response){
     //SAVE A USER 
     const newUser = new User(req.body);
     newUser.password = await newUser.encrypPassword(newUser.password);
     const savedUser = await newUser.save();
     const token = jwt.sign({_id : savedUser._id}, process.env.SECRET_KEY || "secret")
     res.header('token', token).json(savedUser)
}
export async  function signin(req:Request, res:Response){
      const user = await User.findOne({email:req.body.email})
      if(!user){
          return res.status(404).json("email or passswor not wrong")
      }
      const correctPassword = await user.validatePassword(req.body.password)
      if(!correctPassword){
          return res.status(404).json("passswor not found")
        }
        const token = jwt.sign({_id:user._id }, process.env.SECRET_KEY || "secret",{
            expiresIn: 60 * 60 *24
        })
        res.header('token', token).json(user)
} 

export function profile(req:Request, res:Response){
    res.send("profile")
} 
