const mongoose=require("mongoose")

const taskSchema= new mongoose.Schema({
    moduleId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"projectmodule"
    },
    projectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    },
    priority:{
        type:String
    },
    description:{
        type:String
    },
    statusId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"status"
    },
    totalMinutes:{
        type:Number
    },
    totalUtlilHours:{
        type:Number
    }
}
)

const taskModel=mongoose.model("task",taskSchema)

module.exports=taskModel