import express from "express";
import {updateroom,getroomById,getrooms,Deleteroom, createRoom} from '../controllers/room.js'
import { verifydmin } from "../middleware/verifyautth.js";

 const room=express.Router();
  room.post("/room/:id",createRoom)
  room.delete("/room/delete/:id/:id",Deleteroom)
   room.put("/room/update/:id",updateroom)
   room.get("/room/all",getrooms)
   room.get('/room/:id',getroomById)

  export default room