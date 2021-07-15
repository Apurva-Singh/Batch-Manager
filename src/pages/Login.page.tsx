import React, { useState } from "react";
import { FC , memo } from "react";
import { Link } from "react-router-dom";
// import {HiLockClosed} from "react-icons/hi";

interface Props{
 
}

const Login: FC<Props>=(props)=>{
    const [data, setData]= useState({email:"", password:""});

    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        const nameOfChangeInput= event.target.name;
        setData({...data, [nameOfChangeInput]: event.target.value});
    }
    const handleBlur= (event:React.FocusEvent<HTMLInputElement> )=>{
        setTouched({...touched,[event.target.name]: true});

    }
    const [touched, setTouched]= useState({email: false, password: false});
    let emailError="";
    let passwordError="";

    if(!data.email){
        emailError="Email is required";
    }
    else if(data.email && !(data.email.endsWith("gmail.com"))){
        emailError="Please enter a valid email";
    }
    if(!data.password){
        passwordError="Password is required";
    }
    else if(data.password.length < 8){
        passwordError="Password should be atleast 8 characters long.";
    }
    return(
        

        <div className=" max-w-80 ml-auto mr-auto"> 
        <div className=" flex flex-col">
           <h1>Log In to <span className="text-blue-500">CORK</span></h1>
            <p>New Here? <Link to="/signup"><span className="text-blue-400">Click here</span></Link></p>
            <div className="mt-10 ">
            <form 
            onSubmit={(event)=>{
                event.preventDefault();
                if(emailError || passwordError){
                    console.log("Invalid input")
                    return;
                }
                console.log(data);
             
            }}
            >
            <div>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input className="focus:outline-none" type="email" id="email" name="email" autoComplete="email"
            value={data.email} 
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Username" />
            </div>
            { touched.email && <div className="text-red-400">{emailError}</div>}
         <div>
                <label htmlFor="password" className="sr-only">password </label>
            <input className="focus:outline-none mt-4" 
            type="password" id="password" 
            name="password" 
            autoComplete="cureent-password" 
            value={data.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Password" />
            </div>
            
            {
            touched.password &&<div className="text-red-400">{passwordError}</div>
                }
            <div><Link to="/forgot-password" >Forgot Password?</Link></div>
            <div>
            <button type="submit" >Login</button>
            </div>
            </form>
            </div>
            </div>
            
        </div>
    );
};
Login.defaultProps={
}

export default memo(Login);