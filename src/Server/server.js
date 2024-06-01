const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const userModel = require('./user');

const app= express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://aryaabhinav219:123@alphaclothing.ywv2tqg.mongodb.net/")
// mongoose.connect("mongodb://127.0.0.1:27017/AlphaClothing");


app.post('/register',(req,res) => {
    userModel.create(req.body).then(profile => res.json(profile)).catch(err => res.json(err))
    
    
    
}) 

const isAuthenticated = (req, res, next) => {
    const { username, pass } = req.body;

    userModel.findOne({ username })
        .then(user => {
            if (user && user.pass === pass) {
                req.username = user.username;
                next(); 
            } else {
                res.json('User not present'); 
            }
        })
        .catch(error => {
            console.error("Error authenticating user:", error);
            res.status(500).json({ error: "Internal server error" });
        });
    };
    







app.post('/login', isAuthenticated,(req,res) => {
    
    if(isAuthenticated){
        res.json('Success');
        res.json({ username: req.username }); //Send back the username to the client
    }
    else{
                res.json("no user present Please Signup");
            }
})


app.get('/user/:username', (req, res) => {
    const username = req.params.username;
    userModel.findOne({ username })
        .then(user => {
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        })
        .catch(error => {
            console.error("Error fetching user data:", error);
            res.status(500).json({ error: "Internal server error" });
        });
});








app.listen(5000,()=>{
    console.log("Server is running");
})
