import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

interface Props{
    icon: React.ReactElement,
    Title: string,
 
}

const DropDowns: React.FC<Props>=({icon,Title})=>{
    return(
        <div>
          <div className="flex flex-row items-center p-10 rounded-md hover:bg-gray-400 w-52 m-auto">
         <div>{icon}</div>
         <div className="flex justify-center flex-row items-center pl-8 text-md" >
         <div ><h2>{Title}</h2></div>
         <div className="absolute right-6">
         <RiArrowDropRightLine className="h-6 w-6" />
         </div>
        </div>
         </div>
        </div>
    );
};
DropDowns.defaultProps={
}

export default DropDowns;