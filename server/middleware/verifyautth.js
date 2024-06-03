import jwt from'jsonwebtoken'
import express from 'express'



// export const verifyJwt = async (req, res, next) => {
//   try {
//     const token = req.cookies.access_token;
//     if (!token) {
//       console.log('No token found');
//       return res.status(400).json({ error: 'No token found, you are not authenticated' });
//     }

//     jwt.verify(token, "gakiza", (err, user) => {
//       if (err) {
//         // Remove the cookie if the token is invalid
//         res.clearCookie('access_token');
//         return res.status(401).json({ error: `Token provided is not correct the token provided is ${req.cookies}` })
//         console.log(token);
//       }
//       req.user = user;
//       next();
//     });
//   } catch (error) {
//     console.error('Error in JWT verification middleware:', error);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
 export const verifyJwt = async (req, res, next) => {
    try {
      console.log('Cookies:', req.cookies['access_token']); // Log all cookies
      const token = req.cookies.access_token;
      console.log('Access Token:', token);  // Log the specific access token
  
      if (!token) {
        console.log('No token found');
        return res.status(400).json({ error: 'No token found, you are not authenticated' });
      }
  
      jwt.verify(token, "gakiza", (err, user) => {
        if (err) {
          res.clearCookie('access_token');
          return res.status(401).json({ error: 'Token provided is not correct' });
        }
        req.user = user;
        next();
      });
    } catch (error) {
      console.error('Error in JWT verification middleware:', error);
       res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  export const verifyUser=(req,res,next)=>{
    verifyJwt(req,res,()=>{
           if(req.user.id=req.params.id||req.user.isAdmin){
            next()
     
           }else{
         res.send(`you are not authorized`)
           }
    })
         

  }
  export const verifydmin=(req,res,next)=>{
    verifyJwt(req,res,()=>{
           if(req.user.isAdmin){
            next()
     
           }else{
         res.send(`you are not an admin`)
           }
    })
         

  }
  

 
 
//   export const verifyJwt = async (req, res, next) => {
//     try {
//         const token = req.cookies
  
//         if (!token) {
//             return res.status(400).json({ error:` No token found, you are not authenticated the token is${token}` })
//             console.log(req.cookies.access_token);
//         }
  
//         jwt.verify(token, "gakiza", (err, user) => {
//             if (err) {
//                 return res.status(401).json({ error: 'Token provided is not correct' });
//             }
//             req.user = user;
//             next();
//         });
//     } catch (error) {
//         console.error('Error in JWT verification middleware:', error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
//   };
 
 