const UserModel=require("../model/user-model")

//add post method

module.exports.addUser= function(req,res){
        
         let firstName = req.body.firstName
          let email = req.body.email
          let password = req.body.password
         let role = req.body.role
         let secondName=req.body.secondName
         let address=req.body.address

   
    let elish=new UserModel({
        
        firstName : firstName,
         email : email,
         password : password,
         role :role,
         secondName:secondName,
         address:address

         
    })

    elish.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })

}

// list users

//list
module.exports.getAllUsers = function (req, res) {

    UserModel.find().populate("role").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}

//delete
module.exports.deleteUser = function(req,res){
    //params userid 
    let userId = req.params.userId //postman -> userid 

    UserModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}
