import React, { useState } from "react";
import { FC , memo } from "react";
import { Link, useHistory } from "react-router-dom";
import {HiLockClosed, HiUser} from "react-icons/hi";
import {FaSpinner} from "react-icons/fa";
import {BsToggleOff} from "react-icons/bs";

import * as yup from "yup";

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

    const [submitting, setSubmitting]= useState(false);

    const history= useHistory();
     

    let emailError="";
    let passwordError="";

  

    const formValidator= yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required().min(8),
    }) 
        console.log("isFormValid", formValidator.isValidSync(data));


    try{
        formValidator.validateSync(data);
    }
    catch(e){
        console.log(e);
    }
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
        

        <div className=" w-96 ml-auto mr-auto"> 
        <div className=" flex flex-col">
           <h1 className="text-40">Log In to <span className="text-primary">CORK</span></h1>
            <p className="text-14 mt-2">New Here? <Link to="/signup"><span className=" text-primary border-b font-semibold border-b-primary">Create an account</span></Link></p>
            <div className="mt-10 ">
            <form 
            onSubmit={(event)=>{
                event.preventDefault();
                if(emailError || passwordError){
                    console.log("Invalid input")
                    return;
                }

                setSubmitting(true);
                console.log("loging started with  ",data);
              
                setTimeout(() => {
                    console.log("loging successful ");

                    history.push("/dashboard");
                   
                }, 5000);
              
             
            }}
            >
            <div className="pb-25">
            <div className="flex flex-row items-baseline pb-10">
            <HiUser className="text-indigo-500 h-5 w-5"/>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input className="pl-8 focus:outline-none" type="email" id="email" name="email" autoComplete="email"
            value={data.email} 
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Username" />
            </div>
            
            { touched.email && <div className="text-red-400 mb-2">{emailError}</div>}
            <div className=" h-px bg-gray-100 mt-2"></div>
            </div>
       <div className="pb-25 mb-2">
          <div className="flex flex-row items-baseline pb-10">
         <HiLockClosed className="text-indigo-500 h-5 w-5 " />
           <label htmlFor="password" className="sr-only">password </label>
            <input className=" pl-8 focus:outline-none mt-4" 
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
                 <div className=" h-px bg-gray-100 "></div>
                 </div>
            <div className="flex flex-row justify-between">  
            <div className="flex flex-row items-center"> 
            <p className="text-14">Show Password </p>
            <span><BsToggleOff className=" text-primary h-5 w-5 ml-2" /></span>
            </div>
            <div>
            <button type="submit"
            className="disabled:opacity-50
            shadow-xl rounded-md
            text-14
            text-white px-20 py-8 cursor-pointer hover:shadow-none bg-primary inline-block text-center  "
            disabled={!formValidator.isValidSync(data)} >
            Login
            </button>
            </div>
            </div>
            {submitting && <FaSpinner className="mt-5 animate-spin "></FaSpinner>}
            <div className="flex flex-col mt-14 items-center">
                <div className="mb-2">
                <input type="checkbox" name="loggedin" className=" bg-gray-300 outline-none"/>
                <label htmlFor="loggedin" className="text-gray-400 pl-10">Keep me logged on</label>
                </div>
                <div className="mt-4">
                <Link to="/forgot-password" className="text-primary">Forgot Password?</Link>
                </div>
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