// takes the incoming request and does some pre-processing before accessing the routes
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res, next) => {
   const { authorization } = req.headers; 
    // authorization = Bearer sometokenhere..
    
    if(!authorization){
        return res.status(401).send({error:'You must be logged in.'});
    }

   const token = authorization.replace('Bearer ', '');
   console.log(token)
   jwt.verify(token, 'my_secret_key', async (err, payload) => {
        if(err){
            return res.status(401).send({error: 'You must be logged in'});
        }

        const { userId } = payload; 

        const user = await User.findById(userId);
        req.user = user; 
        next(); 
   })
};