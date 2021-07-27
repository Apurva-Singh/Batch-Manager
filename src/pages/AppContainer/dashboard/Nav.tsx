import React from "react";
import { HiOutlineMail, HiOutlineSearch } from "react-icons/hi";
import {VscBellDot} from "react-icons/vsc";

interface Props{
 
}

const Nav: React.FC<Props>=(props)=>{
    return(
        <div className="bg-secondary flex h-14 w-screen justify-between">
            <div className="flex">
                <img src="https://designreset.com/cork/ltr/demo4/assets/img/logo.svg" 
                alt="logo" className="h-12"  />
                <h1 className="text-white hidden">CORK</h1>
            </div>
            <div className="flex items-center">

                <HiOutlineSearch className="text-white h-12 w-6" />
                <img src="https://designreset.com/cork/ltr/demo4/assets/img/ca.png" alt="language"
                className="h-6 w-6 ml-3"
                
                />
                <HiOutlineMail className="text-white h-12 w-7 ml-3" />
                <VscBellDot className="text-white h-12 w-7 ml-3" />
                <img src="https://designreset.com/cork/ltr/demo4/assets/img/profile-16.jpeg"
                 alt="profile" className="h-7 w-7 rounded-sm mx-3" />
            </div>
        </div>
    );
};
Nav.defaultProps={
}

export default Nav;