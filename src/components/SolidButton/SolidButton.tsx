import React from "react";
import { ButtonHTMLAttributes } from "react";
 
interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
 theme: 'primary'|'secondary';
 children: string;
 type?: 'submit'|'reset' | 'button' | undefined;
}
 
const SolidButton: React.FC<Props>=({children,theme, className,...rest})=>{
    const themeClasses = theme === 'primary'? ' border-primary hover:bg-primary text-primary hover:text-white ' : ' border-gray-600 hover:bg-gray-700 text-gray-400 hover:text-white';
    return(
        <div>
           <button
               {...rest}
                  className={"disabled:opacity-50 mt-4 sm:mt-0 shadow-xl  border-2 rounded-full text-14 px-20 py-8 cursor-pointer hover:shadow-none inline-block text-center" + themeClasses +" "+className}
                 
                >
                  {children}
                </button>
        </div>
    );
};
SolidButton.defaultProps={
    theme: 'primary',
    
}
 
export default SolidButton;
