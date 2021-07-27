import React from "react";
import { Link } from "react-router-dom";

interface Props{
 
}

const Recordings: React.FC<Props>=(props)=>{
    return(
        <div>
          Tbis is a recordings page.
         <Link to="/dashboard">Go to <span className="text-blue-400">dashboard</span>
         </Link>
        </div>
    );
};
Recordings.defaultProps={
}

export default Recordings;