 import express from 'express'
 import bcrypt from 'bcryptjs'
 import jwt from 'jsonwebtoken'

  import Users from '../models/users.js'

   export const register=async(req,res)=>{
    try {
    //   const existingUser = await Users.findOne({ 
    //         $or: [
    //               {Username:req.body.Username},
    //             { email: req.body.email }
    //         ]
    //     });

    //     if (existingUser) {
    //         // If user exists, respond with a message
    //         return res.json({ message: 'This user already exists please chamge email and username' });
    //     }
        var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync(req.body.password, salt);
          const newUser=new Users({Username:req.body.Username,email:req.body.email,password:hash})
          
          await newUser.save()
          res.status(200).json("user created succesfully!!")
         
    }catch (err) {
         res.json(`an error occured is ${err}`)
        
    }
   }  

   export const login=async(req,res,next)=>{

       try {
            const user=await  Users.findOne({
                  Username:req.body.Username
            })
            if(!user){
                return  res.status(401).json("no user found")
            }
            const isPasswordCorrect=await bcrypt.compare(req.body.password,user.password)
            if(!isPasswordCorrect){
                return  res.status(400).json(`password is not correct `)
                  
            }
             const {password,isAdmin,...otherDetails}=req.body
            const jwtauth=jwt.sign({id:user._id,isAdmin:user.isAdmin},"gakiza",{ expiresIn: '1h' })
            res.status(200).cookie("access_token",jwtauth,{httpOnly:true,secure: process.env.NODE_ENV === 'production'}).json({...otherDetails})
            
       } catch (err) {
            return res.json(`an erorr occured is ${err}`)
            
       }

   }
   export const updateuser=async(req,res)=>{
      try {
         const UpdatedHotel=await Users.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
         UpdatedHotel.save()
          res.status(200).json('user updated succesfully!!')
              
        
      } catch (err){
         res.json(`an error occured is ${err}`)
      }

  }
  export const Deleteuser=async(req,res)=>{
           try {
            const deletehotel=await Users.findByIdAndDelete(req.params.id)
            res.status(200).json(`user  deleted succesfully!!`)
            
           } catch (err) {
          return res.status(500).json(`user  failed to be deleted `)
            
           }

  }



export const getallusers=async(req,res)=>{
           try{
const allHotels=await Users.find()
res.status(200).json(`
${allHotels}`)
           }
           catch(err){
res.status(400).json(`an error occured is ${err}`)
           }
    }

     export const getuserById=async(req,res)=>{
            try {
               const oneHotel=await Users.findById(req.params.id)
                res.status(200).json(oneHotel)
              
            } catch (ERR) {
               res.json(`an error ocuuuring is ${ERR}`)
            }

     }  