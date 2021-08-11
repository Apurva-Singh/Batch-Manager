
import React, { memo } from "react";
// import AppContext from "../App.context";
import Sidebar from "../components/Sidebar";
import Nav from "./AppContainer/dashboard/Nav";
import SecondaryNav from "./AppContainer/dashboard/SecondaryNav";
import ProfileCard from "./ProfileCard";

interface Props{
 
}

const UserProfile: React.FC<Props>=(props)=>{

    

    return(
        <div className="relative bg-gray-200 h-screen overflow-scroll">
            <Nav />
            <SecondaryNav />
            <div className="hidden md:block">
            <Sidebar/>
            </div>
         <div className="  "><ProfileCard/></div>
         
      
        </div>
    );
};
UserProfile.defaultProps={
}

export default memo(UserProfile);