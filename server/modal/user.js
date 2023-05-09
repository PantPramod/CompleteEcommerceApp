const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email:String,
    password:String,
    username:String,
    mobileno:String,
    isEmailVerified:Boolean,
    isMobileVerified:Boolean
})


 
const user = mongoose.model("user", userSchema)

module.exports = user