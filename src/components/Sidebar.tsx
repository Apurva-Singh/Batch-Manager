import React from "react";
import {AiOutlineHome, AiOutlineUser, AiTwotoneLock} from "react-icons/ai";
import {BiChevronDown} from "react-icons/bi";
import DropDowns from "./DropDowns";
import {AiOutlineAppstore} from "react-icons/ai";
import { HiOutlineCube } from "react-icons/hi";
import { RiFlashlightLine, RiStackLine } from "react-icons/ri";
import {BsNewspaper} from "react-icons/bs";
import {SiPagekit} from "react-icons/si";

interface Props{
 
}

const Sidebar: React.FC<Props>=(props)=>{
    return(
        <div className="fixed h-full overflow-scroll scrol top-26 w-60 z-20 bg-gray-200 border-r-2 border-gray-300 shadow-inner  ">
         <div className="flex-col space-y-4 text-center pt-8 ">
         <div className="flex flex-row items-center p-10 rounded-md hover:bg-gray-400  shadow-md w-52 bg-white m-auto">
         <AiOutlineHome className="text-secondary h-6 w-6" />
         <div className="flex justify-center flex-row items-center pl-8 text-md" >
         <div ><h2>Dashboard</h2></div>
         <div className="absolute right-6">
         <BiChevronDown className="h-6 w-6" />
         </div>
        </div>
         </div>
         <DropDowns icon={<AiOutlineAppstore width={6} height={6} />} Title="Apps" />
         <DropDowns icon={<HiOutlineCube width={6} height={6} />} Title="Components" />
         <DropDowns icon={<RiFlashlightLine width={6} height={6} />} Title="Elements" />
         <DropDowns icon={<RiStackLine width={6} height={6} />} Title="DataTables" />
         <DropDowns icon={<BsNewspaper width={6} height={6} />} Title="Forms" />
         <DropDowns icon={<AiOutlineUser width={6} height={6} />} Title="Users" />
         <DropDowns icon={<SiPagekit width={6} height={6} />} Title="Pages" />
         <DropDowns icon={<AiTwotoneLock width={6} height={6} />} Title="Authentication" />
         <DropDowns icon={<AiOutlineAppstore width={6} height={6} />} Title="Apps" />
         <DropDowns icon={<AiOutlineAppstore width={6} height={6} />} Title="Apps" />
         <DropDowns icon={<AiOutlineAppstore width={6} height={6} />} Title="Apps" />
       
         </div>
        
        </div>
    );
};
Sidebar.defaultProps={
}

export default Sidebar;