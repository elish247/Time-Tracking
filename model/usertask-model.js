const mongoose=require("mongoose")

const usertaskSchema= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },

    taskId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"task"
    }
}
)


const usertaskModel=mongoose.model("usertask",usertaskSchema)

module.exports=usertaskModel