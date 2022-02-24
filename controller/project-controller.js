const ProjectModel=require("../model/project-model")

// add project

module.exports.addProject=function(req,res){
    let title=req.body.title
    let description=req.body.description
    let technology=req.body.technology
    let estimatedHours=req.body.estimatedHours
    let startDate=req.body.startDate
    let completionDate=req.body.completionDate

    let elish=new ProjectModel({
        title:title,
        description:description,
        technology:technology,
        estimatedHours:estimatedHours,
        startDate:startDate,
        completionDate:completionDate


    })

    elish.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })


}

// list project details

module.exports.getProjectDetails = function (req, res) {

    ProjectModel.find().exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}