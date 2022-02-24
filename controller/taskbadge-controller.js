const taskbadgeModel=require("../model/taskbadge-model")

// add task badge model

module.exports.addTaskBadge=function(req,res){
    let badge= req.body.badge

    let elish= new taskbadgeModel({
        badge:badge
    })

    elish.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })
}
// list task badge

module.exports.gettaskbadge = function (req, res) {

    taskbadgeModel.find().exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}