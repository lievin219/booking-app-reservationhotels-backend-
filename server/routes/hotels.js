import express from "express";
import { createhotel, updateHotel,DeleteHotel, getPosts, getHotelById } from "../controllers/hotels.js";
import { verifydmin } from "../middleware/verifyautth.js";

 const hotels=express.Router();

 hotels.post('/hotel/create',verifydmin,createhotel)
 hotels.put("/hotel/:id",verifydmin,updateHotel)
 hotels.delete("/hotel/delete/:id",verifydmin,DeleteHotel)
 hotels.get("/hotels/all",getPosts)
 hotels.get("/hotel/one/:id",getHotelById)
 


  export default hotels