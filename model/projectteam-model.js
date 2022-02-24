const mongoose=require("mongoose")

const projectTeamSchema=new mongoose.Schema({
    projectcode:{
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


const projectTeamModel=mongoose.model("projectteam",projectTeamSchema)
module.exports=projectTeamModel