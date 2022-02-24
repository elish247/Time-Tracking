const mongoose= require ("mongoose")
const { stringify } = require("nodemon/lib/utils")

//schema

let RoleSchema= new mongoose.Schema({
    roleName:{
        type:String
    }

})

//model

let RoleModel =mongoose.model("role",RoleSchema)
module.exports=RoleModel