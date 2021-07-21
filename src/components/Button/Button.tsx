import React from "react";
import { ButtonHTMLAttributes } from "react";
 
interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
 theme: 'primary'|'secondary';
 children: string;
 type?: 'submit'|'reset' | 'button' | undefined;
}
 
const Button: React.FC<Props>=({children,theme, className,...rest})=>{
    const themeClasses = theme === 'primary'? ' bg-primary hover:bg-indigo-700  ' : ' bg-gray-600 hover:bg-gray-700';
    return(
        <div>
           <button
               {...rest}
                  className={"disabled:opacity-50 mt-4 sm:mt-0 shadow-xl rounded-md text-14  text-white px-20 py-8 cursor-pointer hover:shadow-none inline-block text-center" + themeClasses +" "+className}
                 
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
