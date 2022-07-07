import React, { useEffect, useState } from "react";
import LoginForm from "./componenets/LoginForm";
import {getUser,addUser,editUser,deleteUser} from "./apis/studentmangaementAPICall"
import TableUser from "./componenets/TableUser"
import CreateUser from "./componenets/CreateUser";


import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin@123"
  }
  
  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");
  const [users, setstudent] = useState([]);
  
  const Logout = ()  =>{
    setUser({name:"", email:""});
   }
 

  const Login = details =>{
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        name:details.name,
        email:details.email
      });
    } else{
      console.log("wrong password or mail");
      setError("wrong password or mail")
    }
  }

  //Get all user
  useEffect (() =>{
    getUser().then(users => setstudent(users))
  }, [])

  //create an function for add user
const adduser = (user) => {
  return addUser(user)
  .then (data =>{
      setstudent([...users,data])
  })
}

  //Edit user
const edituser = (user) =>{
  return editUser(user)
    .then(data => {
      console.log(data);
      return data;
    })
}

//delete user

const deleteuser = (id) =>{
  return deleteUser(id)
    .then(data => {
      if(data.deletedCount ===1){
        setstudent(users.filter(user => user._id !== id));
      }
    })
}

  return (


    <div className="App">

      <LoginForm onCreate={LoginForm}/><br></br>
      <CreateUser onCreate ={adduser} /><br></br> 
      <TableUser users={users} onDelete={deleteuser} onUpdate={edituser}/>  
      
    </div>
  );
  
  }


export default App;
