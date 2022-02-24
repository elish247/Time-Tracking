const mongoose= require ("mongoose")
const { stringify } = require("nodemon/lib/utils")

//schema

let UserSchema= new mongoose.Schema({
    firstName:{
        type:String
    },
    secondName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        Type:String
    },
    address:{
        Type:String
    },
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"role"
    }




})

//model

const UserModel =mongoose.model("user",UserSchema)
module.exports=UserModel