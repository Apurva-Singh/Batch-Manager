import React from "react";
import { Link } from "react-router-dom";
import AvatarStack from "../../components/Avatars/AvatarStack";
import DailySalesCard from "./DailySalesCard";
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
         <DailySalesCard />
         <AvatarStack avatarUrl={
            [
        "https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126.jpg",
        "https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg",
        "https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126.jpg",
        
    ]} sizeToDisplay="xl" ></AvatarStack>
   
        </div>
    );
};
Dashboard.defaultProps={
}

export default Dashboard;