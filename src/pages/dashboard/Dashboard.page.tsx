import React from "react";
import { Link } from "react-router-dom";
import AvatarBox from "../../components/Avatars/AvatarBox";
import AvatarContent from "../../components/Avatars/AvatarContent";
import AvatarStack from "../../components/Avatars/AvatarStack";
import Nav from './Nav';
import SecondaryNav from "./SecondaryNav";

interface Props{
 
}

const Dashboard: React.FC<Props>=(props)=>{
    return(
        <div className="h-screen">
            <Nav />
            <SecondaryNav />
            <p>
         This is a Dashboard page.
         <Link to="/recordings">Go to <span className="text-indigo-400">Recordings</span>
         </Link>
         </p>
      <AvatarBox />
        </div>
    );
};
Dashboard.defaultProps={
}

export default Dashboard;