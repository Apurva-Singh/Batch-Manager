import React from "react";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
 touched?: boolean;
 error?: string;
 id: string;
 
}

const Input: React.FC<Props>=({touched, error,className,id,placeholder, ...rest})=>{
    return(
     <div>
            <div className="flex flex-row items-baseline">
            { id && placeholder && ( <label htmlFor={id} className="sr-only">{placeholder}</label> )}
            <input className="pl-2 focus:outline-none"
            {...rest} 
            placeholder={placeholder}
            id={id} />
            </div>
            <div className=" h-px bg-gray-100 mt-4"></div>
            { touched && <div className="text-red-400">{error}
            </div>}
            </div>
   
    );
};
Input.defaultProps={
    touched: false,
    error:"",
    
}

export default Input;