
import { Group } from '../models/Group';
import { GROUP_QUERY, GROUP_QUERY_COMPLETED } from './action.constants';


export const groupsQueryAction = (query: string) => ({
    type: GROUP_QUERY,
    payload: query,
});

export const groupsQueryActionCompleted = (query: string, groups: Group[]) => ({
    type: GROUP_QUERY_COMPLETED,
    payload: {query, groups},  // obj structuring query: query, groups: groups
})