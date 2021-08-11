import React, { memo } from "react";
import { Link } from "react-router-dom";
import GroupsToDisplay from "./GroupsToDisplay";
// import { Link } from "react-router-dom";
// import DailySalesCard from "./DailySalesCard";
import Nav from "./Nav";
import SecondaryNav from "./SecondaryNav";
// import groupDisplay from "./groupDisplay.page";

interface Props {}

const Dashboard: React.FC<Props> = () => {
  
  return (
    <div className="bg-gray-200 w-full">
      <Nav />
      <SecondaryNav />
     <div className="flex m-auto w-48">
     <Link to="/groups">Go to <span className="text-blue-400">Groups Here</span>
         </Link>
    
     </div>
    </div>
  );
};
Dashboard.defaultProps = {};

export default memo(Dashboard);
