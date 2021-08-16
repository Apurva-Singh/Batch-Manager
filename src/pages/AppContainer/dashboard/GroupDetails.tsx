import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { useAppSelector } from "../../../store";
import { groupByIdSelector } from './../../../selectors/groups.selectors';
import { fetchOneGroup } from "../../../actions/groups.actions";

interface Props{}

const GroupDetails: React.FC<Props>=(props)=>{

  const groupId = +useParams<{ groupId: string}>().groupId;
    
  const groupByIds = useAppSelector(groupByIdSelector);
  
  const group = groupByIds[groupId];
  const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchOneGroup(groupId));
    }, [groupId]);
    
    return(
    
      <div className="bg-gray-200 ml-auto h-screen">
    
        
    <div className="flex rounded-md shadow-sm transform hover:-translate-y-1 hover:text-blue-800 ease-in-out text-xs md:text-lg h-20 space-x-4 w-full px-20 items-center max-w-xl md:m-auto even:bg-gray-100 hover:bg-gray-400"
 
 >
        
          <div className=" ">
       <img src={group.group_image_url} alt="thumb" className="rounded-full w-12 h-12 items-center text-sm" />
       </div>
       <div className="flex-col" >
         <p className=" font-semibold">{group.name}</p>
         <p className="text-primary text-14">{group.description}</p>
         </div>
       
     </div>
        </div>
    );
};
GroupDetails.defaultProps={
}

export default GroupDetails;