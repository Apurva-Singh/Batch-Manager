
import { GetGroupRequest, getGroups as getGroupsAPI  } from './../api/group';
import { groupActions } from './../actions/groups.actions';
import { groupQueryMapSelector } from '../selectors/groups.selectors';
import { store } from '../store';



export const getGroups = (request: GetGroupRequest) => {

    const queryMap = groupQueryMapSelector(store.getState());
    
    const query= request.query;
    const groupIds: number[] = queryMap[query];
    
    groupActions.query(query, !groupIds); 

    if(groupIds){
            return; 
    }  

    getGroupsAPI(request).then((groups) => { 
        groupActions.query_completed(query, groups);
    });
}