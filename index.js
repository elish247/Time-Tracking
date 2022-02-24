const mongoose= require("mongoose")
const express=require("express")
const app=express()
const rolecontroller= require("./controller/role-controller")
const usercontroller=require("./controller/user-controller")
const projectcontroller=require("./controller/project-controller")

const statuscontroller=require("./controller/status-controller")

const projectteamcontroller=require("./controller/projectteam-controller")

const projectmodulecontroller=require("./controller/projectmodule-controller")

const taskcontroller=require("./controller/task-controller")

const taskbadgecontroller=require("./controller/taskbadge-controller")

const usertaskcontroller=require("./controller/usertask-controller")

app.use(express.json()) //mobile -> accept json data from request and set data into body 
app.use(express.urlencoded({extended:true}))

//data base connection

mongoose.connect('mongodb://localhost:27017/KJ',function(err){
  if(err){
    console.log("db connection fail .. .. . ");
    console.log(err);
  }else{
    console.log("db Connected....");
  }
})


//urls
app.post("/addroles",rolecontroller.addRole)
//users
app.post("/users",usercontroller.addUser)
app.get("/users",usercontroller.getAllUsers)
app.get("/users",usercontroller.deleteUser)
//project details
app.post("/project",projectcontroller.addProject)
app.get("/project",projectcontroller.getProjectDetails)

//status urls

app.post("/status",statuscontroller.addstatus)
app.get("/status",statuscontroller.getstatus)

//projectteam urls

app.post("/projectteam",projectteamcontroller.addTeam)
app.get("/projectteam",projectteamcontroller.getprojectteam)


// project module urls

app.post("/projectmodule",projectmodulecontroller.addprojectmodule)
app.get("/projectmodule",projectmodulecontroller.getprojectmodule)

// task urls

app.post("/task",taskcontroller.addTask)
app.get("/task",taskcontroller.gettask)

// task badge urls

app.post("/taskbadge",taskbadgecontroller.addTaskBadge)
app.get("/taskbadge",taskbadgecontroller.gettaskbadge)


//user task urls

app.post("/usertask",usertaskcontroller.adduserTask)
app.get("/usertask",usertaskcontroller.getuserTask)

//connection
app.listen(1100,function(){
    console.log("server started on 1100");  
  }) 