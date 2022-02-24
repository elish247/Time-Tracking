const mongoose=require("mongoose")

const taskbadgeSchema=new mongoose.Schema({
    badge:{
        type:String
    }
})

const taskbadgeModel= mongoose.model("taskbadge",taskbadgeSchema)

module.exports=taskbadgeModel