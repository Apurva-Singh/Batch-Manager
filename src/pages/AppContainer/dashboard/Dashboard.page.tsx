import React, { memo, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
// import DailySalesCard from "./DailySalesCard";
import Nav from './Nav';
import SecondaryNav from "./SecondaryNav";
import { getGroup } from '../../../api';
import GroupDisplay from "./GroupDisplay";
import { useAppSelector, GROUP_QUERY_COMPLETED } from './../../../store';
import { useDispatch } from 'react-redux';


interface Props{
}

const Dashboard: React.FC<Props>=()=>{

    const query = useAppSelector(state => state.groupQuery);

    const groups = useAppSelector(state => {
        const groupIds = state.groupQueryMap[state.groupQuery] ||  [];
        const groups = groupIds.map(id => state.groups[id]);
        return groups;
    })

    const userFirstName= useAppSelector((state) => state.me!.first_name);

    // const {user}= useContext(AppContext);
    
    const [reload,setReload]= useState(0);
    // const [users, setUsers] = useState<any>([]);

    // const [query, setQuery]= useState('');

    const dispatch= useDispatch();

    useEffect(() => {
        // getGroup({status: "all-groups", query:`${query}`})
        // .then((response)=> 
        // {      
        //         setUsers(response);
        //     console.log(response);
        //     }

        // ).catch(()=>[
        //     console.error("not found")

        // ]);

        getGroup({ status: "all-groups", query}).then(groups => {
            dispatch({type: GROUP_QUERY_COMPLETED, payload: {groups: groups,
            query: query}});
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[reload]);

//     const handleChange=(e: any)=> {
//         setQuery(e.target.value); 
        
//  };

    return(


         <div className="bg-gray-200 w-full">
            <Nav />
            <SecondaryNav />
         <div className="flex space-x-2 items-center md:max-w-xl justify-center pt-20 mx-auto">
            <input type="text" id="search" placeholder="Search here.." className="px-2 border-2 rounded-lg h-10 mt-2  sm:mt-1 ml-4 focus:outline-none bg-gray-50 border-gray-400" 
           value={query}
            onChange={(e) => {
                dispatch({ type: "groups/query", payload: e.target.value})
            }}/>
             <Button theme="primary" btnType="outline"
             onClick={(e)=> {
                setReload(reload+1);
             }}
             >Search</Button>
        </div>
        <div className="flex flex-col mt-8 max-w-sm mx-auto md:pl-40 lg:pl-0 ">
            
         <div className=" m-auto text-36">Welcome! <span className="text-primary">{userFirstName} </span>
         <h1 className="flex m-auto justify-center text-primary font-bold text-36">Groups</h1></div>
        { groups.length ?(   <div className="-z-99">
              
            { groups.map((group)=><GroupDisplay id={group!.id} name={group.name} imgUrl={group.group_image_url} key={group.id} description={group.description}/>
            )}
            </div> 
            )
                : <div className="text-red-600 m-auto"> No results found </div> 
        }
                    
               
         </div>
        
        </div>
    );
};
Dashboard.defaultProps={
}

export default memo(Dashboard);