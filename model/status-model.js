const mongoose=require("mongoose")

const StatusSchema= new mongoose.Schema({
      
       statusName:{
           type:String
       },
       projectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
       },
       userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
       }
})

const StatusModel= mongoose.model("status",StatusSchema)
module.exports=StatusModel