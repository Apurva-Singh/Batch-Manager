import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../api";
import Button from "../../components/Button/Button";
// import DailySalesCard from "./DailySalesCard";
import Nav from './Nav';
import SecondaryNav from "./SecondaryNav";
import { getGroup } from './../../api';
import GroupDisplay from "./GroupDisplay";


interface Props{
 
}

const Dashboard: React.FC<Props>=(props)=>{
    
    const [reload,setReload]= useState(0);
    const [users, setUsers] = useState<any>([]);

    const [query, setQuery]= useState('');

    useEffect(() => {
        getGroup({status: "all-groups", query:`${query}`})
        .then((response)=> 
        {      
                setUsers(response.data);

            }

        ).catch(()=>[
            console.error("not found")
        ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[reload]);
    const handleChange=(e: any)=> {
        setQuery(e.target.value); 
        
 };

    return(
         <div className="h-screen">
            <Nav />
            <SecondaryNav />
            <p>
         This is a Dashboard page.
         <Link to="/recordings">Go to <span className="text-indigo-400">Recordings</span>
         </Link>
         </p>
         <div className="flex space-x-2 items-center max-w-xl justify-center     mx-auto">
            <input type="text" id="search" placeholder="Search here.." className="px-2 border-2 rounded-md h-10 mt-4 sm:mt-1 ml-4 focus:outline-none" 
           
            onChange={handleChange}/>
             <Button theme="primary" btnType="outline"
             onClick={(e)=> {
                setReload(reload+1);
             }}
             >Search</Button>
        </div>
        <div className="flex flex-col mt-8 ">
        { users.length ?  <div>
        <h1 className="flex m-auto justify-center text-primary font-bold text-36">Groups</h1>
            { users.map((user: any)=>
        
        <GroupDisplay id={user.id} name={user.name} imgUrl={user.group_image_url} key={user.id} description={user.description}/>
            )} 
            </div>  
                : <div className="text-red-600 m-auto"> No results found </div> 
        }
                    
               
         </div>
        
        
    
         <div className="absolute top-32 right-2">  
         <Button theme='primary' btnType="solid" isValid={true}
         onClick={()=>{
            logout();
            window.location.href = "/login";
         }}
         >Logout</Button>
             </div>
        </div>
    );
};
Dashboard.defaultProps={
}

export default Dashboard;