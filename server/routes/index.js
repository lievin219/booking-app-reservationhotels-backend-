 import express from 'express'
  const router=express.Router()

  router.get('/api',(req,res)=>{
    res.send('api established succesfully!!')
})
     export default router
           