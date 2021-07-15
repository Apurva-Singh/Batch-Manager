import React from "react";
import { Link } from "react-router-dom";

interface Props{
 
}

const Dashboard: React.FC<Props>=(props)=>{
    return(
        <div>
         Tbis is a Dashboard page.
         <Link to="/recordings">Go to <span className="text-blue-400">Recordings</span>
         </Link>
        </div>
    );
};
Dashboard.defaultProps={
}

export default Dashboard;