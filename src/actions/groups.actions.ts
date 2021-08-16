import { Group } from '../models/Group';
import { GROUP_FETCH_ONE, GROUP_QUERY_CHANGED, GROUP_QUERY_COMPLETED } from './action.constants';


export const groupsQueryChangedAction = (query: string) => ({
    type: GROUP_QUERY_CHANGED,
    payload: query,
});

export const groupsQueryActionCompleted = (query: string, groups: Group[]) => ({
    type: GROUP_QUERY_COMPLETED,
    payload: {query, groups},  // obj structuring query: query, groups: groups
});



export const fetchOneGroup = (id: number) => ({
    type: GROUP_FETCH_ONE,
    payload: id

})