import React from "react";
import { Link } from "react-router-dom";

interface Props{
 
}

const Signup: React.FC<Props>=(props)=>{
    return(
        <div className="flex flex-row justify-between"> 
        <div>
         This is signup page.
         Already have an account? <Link to="/login"><span className="text-blue-400">Click here</span></Link>
         
        </div>
        </div>
    );
};
Signup.defaultProps={
}

export default Signup;