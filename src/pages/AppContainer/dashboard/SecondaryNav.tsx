import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import { logout } from "../../../api";
import Button from "../../../components/Button/Button";

interface Props{
 
}

const SecondaryNav: React.FC<Props>=(props)=>{
    // let click= false;
    const [click, setClick] = useState(false);
    const handleClick=(e: any)=> {
      setClick(!click);  
 };
 
 const classDropdown=click ? ('flex flex-col') : 'hidden';

    return(
        <div className="sticky top-14 bg-white z-10">
        <div className=" flex h-12 justify-between shadow-sm items-center ">
            <div className="flex space-x-2">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
         <p>Sales</p>
         </div>
         <div>
             <div className="p-2 text-sm rounded-md h-full flex-col relative" >
                 <div className="flex flex-row justify-between border-2 border-gray-200 rounded-md items-center">
                 <Button theme="secondary" onClick={handleClick} >Settings
                 </Button>
                 <BiChevronDown className="h-6 w-6" />
                 </div>
                 <div className={"absolute z-10 text-left right-0 bg-white p-8 w-full text-gray-500 space-y-3 rounded-sm "+  classDropdown }>
                    <Link to="/profile" className="hover:text-primary">Profile
                    </Link>
                    <Link to="/" className="hover:text-primary">ABCD
                    </Link>
                    <Link to="/more" className="hover:text-primary">More
                    </Link>
                    <Link to="/settings" className="hover:text-primary">Settings
                    </Link>
                    <Button theme='primary' btnType="solid" isValid={true}
         onClick={()=>{
            logout();
            window.location.href = "/login";
         }}
         >Logout</Button>
                 </div>
             </div>
         </div>
        </div>
        </div>
    );
};
SecondaryNav.defaultProps={
}

export default SecondaryNav;