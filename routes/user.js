const express = require("express")
const router = express.Router();
const User = require("../model/user");


router.post("/adduser",async (req,res)=>{
    const userData = new User(req.body)
    userData.save().then((result)=>{
        res.status(200).json({
            data: result,
            message: "User added"
        })
    }).catch((err)=>{
        res.status(400).json({
            data: err,
            message: "User not added"
        })
    })
})

router.get("/getusers",async(req,res)=>{
   await User.find().then((result)=>{
        res.status(200).json({
            data: result,
            message: "Users found"
        })
    }).catch((err)=>{
        res.status(400).json({
            data: err,
            message: "Users not found"
        })
    })
})

router.get("/getuser/:id",async(req,res)=>{
    const id = req.params.id
    await User.findById(id).then((result)=>{
        res.status(200).json({
            data: result,
            message: "User found"
        })
    }).catch((err)=>{
        res.status(400).json({
            data: err,
            message: "User not found"
        })
    })
})

router.put("/updateuser/:id",async(req,res)=>{
    const id = req.params.id;
    await User.findOneAndUpdate({_id:id},req.body).then((result)=>{
        res.status(200).json({
            data: result,
            message: "User updated"
        })
    }).catch((err)=>{
        res.status(400).json({
            data: err,
            message: "User not found"
        })
    })
})

router.delete("/deleteuser/:id",async(req,res)=>{
    const id = req.params.id;
    await User.findByIdAndDelete(id).then((result)=>{
        res.status(200).json({
            data: result,
            message: "User Deleted"
        })
    }).catch((err)=>{
        res.status(400).json({
            data: err,
            message: "User not found"
        })
    })
})
module.exports = router;