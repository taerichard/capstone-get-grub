const express = require('express');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const User = mongoose.model("User"); 

const router = express.Router(); 

router.post('/signup', async (req, res) => {
    const { email, password } = req.body; 

    try{
        console.log('creating')
        const user = new User({email, password});
        await user.save();
        
        

        const token = jwt.sign({ userId: user._id }, 'my_secret_key');
        res.send({ token });
    }
    
    catch(err){
        return res.status(422).send(err);
    }
    
    
});

module.exports = router;