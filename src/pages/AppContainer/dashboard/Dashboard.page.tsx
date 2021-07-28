import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
// import DailySalesCard from "./DailySalesCard";
import Nav from './Nav';
import SecondaryNav from "./SecondaryNav";
import { getGroup } from '../../../api';
import GroupDisplay from "./GroupDisplay";
import AppContext from './../../../App.context';


interface Props{
}

const Dashboard: React.FC<Props>=()=>{

    const {user}= useContext(AppContext);
    
    const [reload,setReload]= useState(0);
    const [users, setUsers] = useState<any>([]);

    const [query, setQuery]= useState('');

    useEffect(() => {
        getGroup({status: "all-groups", query:`${query}`})
        .then((response)=> 
        {      
                setUsers(response);
            console.log(response);
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


         <div className="bg-gray-200">
            <Nav />
            <SecondaryNav />
            {/* <p>
         This is a Dashboard page.
         <Link to="/recordings">Go to <span className="text-indigo-400">Recordings</span>
         </Link>
      
         </p> */}
         <div className="flex space-x-2 items-center max-w-xl justify-center pt-20 mx-auto">
            <input type="text" id="search" placeholder="Search here.." className="px-2 border-2 rounded-lg h-10 mt-4 sm:mt-1 ml-4 focus:outline-none bg-gray-50 border-gray-400" 
           
            onChange={handleChange}/>
             <Button theme="primary" btnType="outline"
             onClick={(e)=> {
                setReload(reload+1);
             }}
             >Search</Button>
        </div>
        <div className="flex flex-col mt-8 ">
            
         <div className=" m-auto text-36">Welcome! <span className="text-primary">{user!.first_name} </span></div>
        { users.length ?  <div className="-z-99">
        <h1 className="flex m-auto justify-center text-primary font-bold text-36">Groups</h1>
            { users.map((user: any)=>
        
        <GroupDisplay id={user.id} name={user.name} imgUrl={user.group_image_url} key={user.id} description={user.description}/>
            )} 
            </div>  
                : <div className="text-red-600 m-auto"> No results found </div> 
        }
                    
               
         </div>
        
        </div>
    );
};
Dashboard.defaultProps={
}

export default Dashboard;