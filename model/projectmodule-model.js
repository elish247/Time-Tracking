const mongoose=require("mongoose")

const projectmoduleSchema=new mongoose.Schema({
    projectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    },
    moduleName:{
        type:String
    },
    description:{
        type:String
    },
    estimatedHours:{
        type:String
    },
    statusId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"status"
    },
    startDate:{
        type:Date
    }
})

const projectmoduleModel= mongoose.model("projectmodule",projectmoduleSchema)

module.exports=projectmoduleModel