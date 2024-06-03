import express from 'express'
 import mongoose from 'mongoose'

  const holtlsata=mongoose.Schema(({
    name:{
        type:String,
        required:true,
        unique:true
    },
    type:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    distance:{
        type:String,
        required:true
    },
    photos:{
        type:[String]
    },
   description:{
        type:String,
        required:true
    },
   rating:{
        type:Number,
        min:0,
        max:5
    },
    rooms:{
        type:[String]
    },cheapestPrice:{
        type:Number,
       
    },
  feautured:{
        type:Boolean,
        default:false
    }
  }))

   const Hotels=mongoose.model("Hotels",holtlsata)
    export default Hotels
 