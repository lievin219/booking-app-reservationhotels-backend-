import express from "express";
import { Deleteuser, getallusers, getuserById, login, register, updateuser } from "../controllers/user.js";
 import { verifyJwt, verifyUser, verifydmin } from "../middleware/verifyautth.js";

 const users=express.Router();
      users.post("/register",register)
      users.post("/login",login)
      users.put("/login/update",updateuser)
      users.get("/login/one/:id",getuserById)
      users.get("/login/all/:id",verifydmin,getallusers)
      users.delete("/login/delete/:id",verifyUser,Deleteuser)
      users.post("/checkauth/:id",verifyUser,(req,res)=>{
    res.json(`you are now  logged in   token cookie found`)
      })
       

       export default users