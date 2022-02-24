const projectTeamModel=require("../model/projectteam-model")
// add projectteam logic

module.exports.addTeam=function(req,res){
    let projectcode=req.body.projectcode
    let projectId=req.body.projectId
    let userId=req.body.userId


    let elish=new projectTeamModel({
        projectcode:projectcode,
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


// list projectteam

module.exports.getprojectteam = function (req, res) {

    projectTeamModel.find().populate("project").populate("user").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}