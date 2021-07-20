import React from "react";
import { Link } from "react-router-dom";
import Nav from './Nav';
import SecondaryNav from "./SecondaryNav";

interface Props{
 
}

const Dashboard: React.FC<Props>=(props)=>{
    return(
        <div>
            <Nav />
            <SecondaryNav />
            <p>
         Tbis is a Dashboard page.
         <Link to="/recordings">Go to <span className="text-indigo-400">Recordings</span>
         </Link>
         </p>
        </div>
    );
};
Dashboard.defaultProps={
}

export default Dashboard;