   import express from 'express'
   import Hotels from '../models/hotels.js'

    export const createhotel=async(req,res)=>{
          const newHotel=new Hotels(req.body)

        
        try {
               const dataforhotel=await newHotel.save()
                res.status(200).json(`your research have been sent you will be notified in seconds`)
         } catch (err) {
           res.status(500).json(`an error leaded to failure  ${err}`)
         }

        }  
        export const updateHotel=async(req,res)=>{
            try {
               const UpdatedHotel=await Hotels.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
               UpdatedHotel.save()
                res.status(200).json('hotel updated succesfully!!')
                    
              
            } catch (err){
               res.json(`an error occured is ${err}`)
            }

        }
        export const DeleteHotel=async(req,res)=>{
                 try {
                  const deletehotel=await Hotels.findByIdAndDelete(req.params.id)
                  res.status(200).json(`hotel ${deletehotel} deleted succesfully!!`)
                  
                 } catch (err) {
                  res.status(500).json(`hotel  failed to be deleted `)
                  
                 }

        }



    export const getPosts=async(req,res)=>{
                 try{
     const allHotels=await Hotels.find()
     res.status(200).json(`all hotels :
     ${allHotels}`)
                 }
                 catch(err){
   res.status(400).json(`an error occured is ${err}`)
                 }
          }

           export const getHotelById=async(req,res)=>{
                  try {
                     const oneHotel=await Hotels.findById(req.params.id)
                      res.status(200).json(oneHotel)
                    
                  } catch (ERR) {
                     res.json(`an error ocuuuring is ${ERR}`)
                  }

           }

    
