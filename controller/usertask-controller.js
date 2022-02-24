const usertaskModel=require("../model/usertask-model")

// add user task

module.exports.adduserTask=function(req,res){
    let userId=req.body.userId
    let taskId=req.body.taskId

    let elish= new usertaskModel({
        userId:userId,
        taskId:taskId
    })

    elish.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })
}


module.exports.getuserTask = function (req, res) {

    usertaskModel.find().populate("user").populate("task").populate("status").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}