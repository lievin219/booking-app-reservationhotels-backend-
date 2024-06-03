import express from 'express'
 import mongoose from 'mongoose'

  const RoomsData=mongoose.Schema({
    title:{
        type:String,
        required: true
   
    },
    description:{
        type:String,
        required:true
       
    },
    price:{
        type:Number,
        required:true
    },
    maxpeople:{
        type:Number,
        required:true
    },
 roomnumbers:[{number:Number,unAvailabledates:{type:[Date]}}]
  },{ timestamps: true })

   const Rooms=mongoose.model("Rooms",RoomsData)
    export default Rooms
 