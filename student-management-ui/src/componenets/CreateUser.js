import emailjs from 'emailjs-com'
import { Password } from "@mui/icons-material";
import React ,{useState}from "react";


function Clickme(){
    alert('Account added Sucessfully')
  }
// function for createstudents
function CreateUser(props){
    const{onCreate}=props;

    const[users,setuser]=useState({
        firstName:"",
        lastName:"",
        email:"",
        dateOfBirth:"",
        mobile:"",
        status:"",
        accountType:"",
        password:""
    });

    const handleChange =(e)=>{
        console.log([e.target.name])
        console.log(e.target.value)
        console.log(users)
        setuser({
            ...users,
           [e.target.name]:e.target.value,
        });
    }
    const onSubmit =(e)=>{
       e.preventDefault();
       onCreate(users)
    }
    const [to_name,setName] =useState("");
    const [from_name,setFormName]=useState("");
    const [message,setpassword]=useState("");
    const [email,setemail]=useState("");
    

    const submitInfo =()=>{
        console.log(to_name+from_name+message+email);

        const emailContent ={
            to_name :to_name,
            from_name:from_name,
            message:message,
            email:email,

        };
        emailjs.send('service_yq46io9', 'template_9cfhl2s', emailContent, 'rSDPcSM_XJ5n5uQgn')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    // Create user form

    return(
        <form onSubmit={onSubmit} > 
        <div className="form-group">
            <div id='contact'></div>
        <h2>Create User </h2>

        <div className="form-group">
        <lable>
            FirstName:
            <input name="firstName" type ="text" value={users.firstName} onChange={(e)=> handleChange(e) && setName(event.target.value) } />
        </lable><br></br>
        </div>

        <div className="form-group">
        <lable>
            LastName:
            <input name="lastName" type ="text" value={users.lastName} onChange={(e)=> handleChange(e)}/>
        </lable>
        </div>

        <div className="form-group"></div>
        <lable>
            Email:
            <input name="email" type ="text" value={users.email} onChange={(e)=> handleChange(e) && email(event.target.value)}/>
        </lable>
        </div>

        <div className="form-group">
        <lable>
        dateOfBirth:
            <input name="dateOfBirth" type ="date" value={users.dateOfBirth} onChange={(e)=> handleChange(e)}/>
        </lable>
        </div>

        <div className="form-group">
        <lable>
        status:
            <input name="status" type ="text" value={users.status} onChange={(e)=> handleChange(e)}/>
        </lable>
        </div>
        
        <div className="form-group">
        <lable>
        mobile:
            <input name="mobile" type ="number" value={users.mobile} onChange={(e)=> handleChange(e)}/>
        </lable> <br></br>
        </div>

        <div className="form-group">
        <lable>
        accountType:
            <input name="accountType" type ="text" value={users.accountType} onChange={(e)=> handleChange(e)}/>
        </lable>
        </div>

        <div className="form-group">
       <lable>
        Password:
            <input name="password" type ="password" value={users.password} onChange={(e)=> handleChange(e)&& setpassword(target.value)}/>
        </lable>  
        </div>
        
        <button name="submit" type="submit" value="Submit" onClick={submitInfo && Clickme}>Submit</button>
        
        </form>
    );

}
    
export default CreateUser;  