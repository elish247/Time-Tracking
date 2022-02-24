const StatusModel=require("../model/status-model")

// add status
module.exports.addstatus=function(req,res){
 
    let statusName=req.body.statusName
    let projectId=req.body.projectId
    let userId=req.body.userId

    let elish=new StatusModel({
         
          statusName:statusName,
          projectId:projectId,
          userId:userId
    })


    elish.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })
}

// list status details
module.exports.getstatus = function (req, res) {

    StatusModel.find().populate("project").populate("user").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}