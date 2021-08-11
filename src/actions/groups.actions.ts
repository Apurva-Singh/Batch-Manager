
import { bindActionCreators } from 'redux';
import { Group } from '../models/Group';
import { store } from '../store';
import { GROUP_QUERY, GROUP_QUERY_COMPLETED } from './action.constants';


export const groupsQueryAction = (query: string, loading: boolean) => ({
    type: GROUP_QUERY,
    payload: {query, loading},
});

export const groupsQueryActionCompleted = (query: string, groups: Group[]) => ({
    type: GROUP_QUERY_COMPLETED,
    payload: {query, groups},  // obj structuring query: query, groups: groups
});


export const groupActions = bindActionCreators({
    query: groupsQueryAction,
    query_completed: groupsQueryActionCompleted
    },store.dispatch);
    