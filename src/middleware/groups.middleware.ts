
import { GetGroupRequest, getGroups as getGroupsAPI  } from './../api/group';
import { groupActions } from './../actions/groups.actions';
import { groupQueryMapSelector } from '../selectors/groups.selectors';
import { store } from '../store';
import axios, { Canceler, CancelTokenSource } from 'axios';
import { groupsLoadingSelector } from './../selectors/groups.selectors';


let canceler:  Canceler | undefined;


export const getGroups = (request: GetGroupRequest) => {
    const state = store.getState();

    // const queryMap = groupQueryMapSelector(state);

    const query= request.query;
    // const groupIds: number[] = queryMap[query];

    // cancelationTokenSource[prevQuery] && cancelationTokenSource[prevQuery]!();


   


    groupActions.query(query); 

 
    canceler && canceler();

    const {cancel, token} = axios.CancelToken.source(); // will give a token and corresponding cancelation function

    canceler = cancel;

    getGroupsAPI(request, token).then((groups) => { 
        groupActions.query_completed(query, groups);
        canceler = undefined;
    });
}