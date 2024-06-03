 import  express from 'express'
 import Hotels from '../models/hotels.js'
 import Rooms from '../models/Room.js'

 export const createRoom=async(req,res)=>{

         const hotelId=req.params.hotelid
        const newroom= new Rooms(req.body)
         try{
             const bookedRoom= await newroom.save()
               try {
await Hotels.findByIdAndUpdate(hotelId,{$push:{rooms:bookedRoom._id}})
               } catch (err) {
                 res.status(401).json({err:`with in an id of hotel is where an error is `})
               }
            res.status(200).json(bookedRoom)
         }
         catch(err){
      return res.status(501).json('fix an error occuring there ')
         }
 }
 export const updateroom=async(req,res)=>{
    try {
       const UpdatedHotel=await Rooms.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
       UpdatedHotel.save()
        res.status(200).json('room updated succesfully!!')
            
      
    } catch (err){
      return res.json(`an error occured is ${err}`)
    }

}
export const Deleteroom=async(req,res)=>{
    const hotelId=req.params.hotelid
     try {
        const deletehotel=await Rooms.findByIdAndDelete(req.params.id)
        try {
            await Hotels.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id}})
                           } catch (err) {
                             res.status(401).json({err:`with in an id of hotel is where an error is `})
                           }
        //   const deletehotel=await Rooms.findByIdAndDelete(req.params.id)
 
          res.status(200).json(`hotel ${deletehotel} deleted succesfully!!`)  
          
         } catch (err) {
          return res.status(500).json(`room   failed to be deleted `)  
          
         }

}



export const getrooms=async(req,res)=>{
         try{
const allroms=await Rooms.find()
res.status(200).json(`
${allroms}`)
         }
         catch(err){
return res.status(400).json(`an error occured is ${err}`)
         }
  }

   export const getroomById=async(req,res)=>{
          try {
             const oneroom=await Rooms.findById(req.params.id)
              res.status(200).json(oneroom)
            
          } catch (ERR) {
             return res.json(`an error ocuuuring is ${ERR}`)
          }

   }
