import React, {useState} from "react";
import {link} from 'react-router-dom';

function LoginForm({Login,error}) {
    const [details,setDetails] =useState({name:"", email:"",password:""});

    const submitHandler = e =>{
        e.preventDefault();

        Login(details);
    }

    return(
       <form onSubmit={submitHandler} > 
           <div className="form-inner">
                <h1>hello Admin !</h1> <br></br>
                <h2>Login</h2>
                {(error !="") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name:e.target.value})} value ={details.name}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" onChange={e => setDetails({...details, email:e.target.value})} value ={details.email}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password:e.target.value})} value ={details.password}></input>
                </div>

                <input Link to="/App"  type="submit" value="LOGIN"/>
           </div>
       </form>
    )
}

export default LoginForm;