const projectmoduleModel= require("../model/projectmodule-model")

module.exports.addprojectmodule=function(req,res){

    let projectId=req.body.projectId
    let moduleName=req.body.moduleName
    let description=req.body.description
    let estimatedHours=req.body.estimatedHours
    let statusId=req.body.statusId
    let startDate=req.body.startDate


    let elish= new projectmoduleModel({
        projectId:projectId,
        moduleName:moduleName,
        description:description,
        estimatedHours:estimatedHours,
        statusId:statusId,
        startDate:startDate
    })

    elish.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })
    
}

// list projectmodule


module.exports.getprojectmodule = function (req, res) {

    projectmoduleModel.find().populate("project").populate("status").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
    
}
