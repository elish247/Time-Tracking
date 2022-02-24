const taskModel=require("../model/task-model")

module.exports.addTask=function(req,res){
    let moduleId=req.body.moduleId
    let projectId=req.body.projectId
    let priority=req.body.priority
    let description=req.body.description
    let statusId=req.body.statusId
    let totalMinutes=req.body.totalMinutes
    let totalUtlilHours=req.body.totalUtlilHours
    
    
    let elish= new taskModel({

     moduleId:moduleId,
     projectId:projectId,
     priority:priority,
     description:description,
     statusId:statusId,
     totalMinutes:totalMinutes,
     totalUtlilHours:totalUtlilHours
    })

    elish.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })

}


//list the task

module.exports.gettask = function (req, res) {

    taskModel.find().populate("project").populate("projectmodule").populate("status").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}