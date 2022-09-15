import "./Login.css"


import { useNavigate } from "react-router-dom"


import  React, { useState } from "react"

import { useDispatch } from "react-redux"

import { Login_Request } from "../../Redux/Login/action"



export const LoginApp = ()=>{

 const dispatch=useDispatch();
    const navigate =useNavigate()
    const [user,setUser] = useState({
        name:"",
        email:"",
        github:""
    })

    const handleChange =(e)=>{
        const{name,value} =e.target;
        

      
       
        setUser({...user,[name]:value,})
    }

    console.log("user",user);
    const register   =()=>{
        const {name,email,github} = user
        
        if(name && email  && github ){
           
          dispatch(Login_Request(user,navigate))
            
        }
           

        else{
            alert ("Please fill all the Details")
        }
       
    }

    return(
    <div className="r">
        
        <div className="r2">
           
            <p className="r1">Create Your Account</p>
            <input className="r3" type="text" name="name" value={user.name} placeholder="Enter Your FullName" onChange={handleChange}/>
            <br />
            <br />
            <input className="r3" type="text" name="email" value={user.email} placeholder="Enter Your E-mail"  onChange={handleChange}/>
            <br /><br />
            <input className="r3" type="text" name="github" value={user.github} placeholder="Enter Your GitHub Id" onChange={handleChange}/>
            <br />
            <br />
            <button className="r4" onClick={register}>Send</button>
         
                 
            </div>
    </div>
    )
}