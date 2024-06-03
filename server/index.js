import express from 'express'
import { configDotenv } from 'dotenv';
import dotenv from 'dotenv'
import router from './routes/index.js';
import users from './routes/users.js';
import room from './routes/room.js';
import hotels from './routes/hotels.js';
import cookieParser from 'cookie-parser'
import cors from 'cors'
//import { verifyJwt } from './middleware/verifyautth.js';
import Authentication from './routes/authenticate.js';


dotenv.config()



 import mongoose from 'mongoose';
  
   const port=5000;
   //username:gakizalievin219  password:KogTHFOTzSswjjWl
   mongoose.connect('mongodb+srv://gakizalievin219:kLjoo3ve8fVXHRFR@cluster0.nqaqfls.mongodb.net/').then(()=>{
     console.log('database  connected succesfully!')
   }).catch((err)=>{
    console.log(`database failed to connect du to ${err}`)
})


 const app=express()
 
 app.use(express.json())
 app.use(cookieParser())
 app.use(cors({credentials: true}))
 app.post('/logout', (req, res) => {
  res.clearCookie('access_token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Strict',
    path: '/'
  });
  res.json({ message: 'Logged out successfully' });
});



 






 

 app.use("/",users)
 app.use("/",hotels)
 app.use("/",room)
//  app.get('/set-cookie', (req, res) => {
//   res.cookie('access_token', 'test-token', { httpOnly: true });
//   res.send('Cookie is set');
// });

// app.get('/test-cookie', (req, res) => {
//   console.log('Cookies: ', req.cookies);
//   res.send(req.cookies);
// });
app.get('/remove-cookie', (req, res) => {
  res.clearCookie('access_token');
  res.send('Cookie has been removed');
});

 
 
 app.listen(port,()=>{
     console.log(`server running on port of ${port}`)
 })
try {
    
} catch (error) {
    
}
