import express from 'express'
 import mongoose from 'mongoose'

  const userdata=mongoose.Schema({
    Username:{
        type:String,
        required: true,
      unique: true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },

  isAdmin:{
        type:Boolean,
        default:false
    }
  },{ timestamps: true })

   const Users=mongoose.model("Users",userdata)
    export default Users
 