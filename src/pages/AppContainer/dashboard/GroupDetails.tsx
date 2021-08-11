import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GROUP_QUERY_COMPLETED } from "../../../actions/action.constants";
import { getGroupById } from "../../../api/group";
import { Group } from "../../../models/Group";
import { GET_GROUP } from './../../../actions/action.constants';

interface Props extends Group{

}

const GroupDetails: React.FC<Props>=(props)=>{

    
  const dispatch = useDispatch();
  

  useEffect(() => {
 

    getGroupById(23).then((group) => {
      dispatch({
        type: GET_GROUP,
        payload: {group},
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    
    
    
    return(
        <div>
         
        </div>
    );
};
GroupDetails.defaultProps={
}

export default GroupDetails;