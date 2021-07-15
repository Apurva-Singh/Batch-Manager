import React from "react";
import { FC , memo } from "react";
import { Link } from "react-router-dom";


interface Props{
 
}

const Login: FC<Props>=(props)=>{
    return(
        <div className="flex flex-row justify-between"> 
        <div>
            This is login page.
        
            Don't have an account?    <Link to="/signup"><span className="text-blue-400">Click here</span></Link>
         
        </div>
        </div>
    );
};
Login.defaultProps={
}

export default memo(Login);