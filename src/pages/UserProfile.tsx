import React, { useContext } from "react";
import AppContext from "../App.context";
import Sidebar from "../components/Sidebar";
import Nav from "./AppContainer/dashboard/Nav";
import SecondaryNav from "./AppContainer/dashboard/SecondaryNav";

interface Props{
 
}

const UserProfile: React.FC<Props>=(props)=>{
    const {user}= useContext(AppContext);


    

    return(
        <div>
            <Nav />
            <SecondaryNav />
            <Sidebar/>
         Profile page
         <div className="m-auto">{user!.first_name}</div>
        </div>
    );
};
UserProfile.defaultProps={
}

export default UserProfile;