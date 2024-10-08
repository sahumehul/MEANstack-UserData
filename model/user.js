const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:String,
    password:String,
    address:String,
    age:Number,
    email:String
})

const userModel = mongoose.model("users",userSchema);

module.exports = userModel;