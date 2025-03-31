const express = require("express");
const User = require("../models/UserModel");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const { protect } = require("../middleware/authMiddleware");  // Import authentication middleware




userRouter.post("/signup",async (req,res)=>{
    try {
        const {name,email,password} = req.body;
        console.log(req.body);
        const userexist = await  User.findOne({email});
        if(userexist){
            return res.status(400).json({message:"User Already exists"});
        }

        const user = await User.create({
            name,
            email,
            password,
        });
        if(user){
            res.status(201).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                token: generateToken(user._id),
            });
        }
    } catch (error) {
        res.status(400).json({message:error.message});
    }
});

userRouter.post("/login",async(req,res)=>{
    try {
        const {email,password} = req.body;
        console.log(req.body);
        const user = await User.findOne({email});
        console.log(user);
        if(user && (await user.matchPassword(password))){
            res.json({
                user:{
                    _id:user._id,
                    name:user.name,
                    email:user.email,
                    isAdmin:user.isAdmin,
                    token:generateToken(user._id),
                }
            });

        }else{
            res.status(401).json({message:"Invalid name or Password"})
        }
    } catch (error) {
        res.status(400).json({message:error.message});
    }
});

const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'10d',
    });

};


// Route to update user score
// userRouter.post("/updatescore", protect, async (req, res) => {
//     try {
//         const { userId, newScore } = req.body; 
//         console.log("this is",req.body);
//         if (!userId || !newScore || !newScore.subject || newScore.score === undefined) {
//             return res.status(400).json({ message: "User ID, subject, and score are required" });
//         }

//         // Find user by ID
//         const user = await User.findById( {userId} );
//         console.log(user)
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         // Check if the subject already exists
//         const existingScore = user.scores.find(s => s.subject === newScore.subject);

//         if (existingScore) {
//             // Update existing subject score
//             existingScore.score = newScore.score;
//         } else {
//             // Add new subject score
//             user.scores.push(newScore);
//         }

//         await user.save();

//         res.status(200).json({ message: "Score updated successfully", user });
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// });

  

module.exports = userRouter;