import React from "react";
import { ButtonHTMLAttributes } from "react";
 
interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
 theme: 'primary'|'secondary';
 children: string;
 type?: 'submit'|'reset' | 'button' | undefined;
 btnType: 'solid' | 'outline';
}
 
const Button: React.FC<Props>=({children,theme,btnType, className,...rest})=>{
    let themeClasses='';
    if(btnType==='solid'){
     themeClasses = theme === 'primary'? ' shadow-xl bg-primary hover:bg-indigo-700 text-white ' : ' shadow-xl bg-gray-600 hover:bg-gray-700 text-white';
    }
    else if(btnType==='outline'){
         themeClasses = theme === 'primary'? ' border-2 border-primary hover:bg-primary text-primary hover:text-white ' : ' border-2 border-gray-600 hover:bg-gray-700 text-gray-400 hover:text-white';
  
    }
    return(
        <div>
           <button
               {...rest}
                  className={"disabled:opacity-50 mt-4 sm:mt-0 rounded-md text-14 px-20 py-8 cursor-pointer hover:shadow-none inline-block text-center" + themeClasses +" "+className}
                 
                >
                  {children}
                </button>
        </div>
    );
};
Button.defaultProps={
    theme: 'primary',
    
}
 
export default Button;
