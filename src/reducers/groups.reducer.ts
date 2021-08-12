
import { Group } from './../models/Group';
import { Reducer } from 'redux';
import { GROUP_QUERY, GROUP_QUERY_COMPLETED } from '../actions/action.constants';
import { addMany, EntityState, getIds } from './entity.reducer';
export interface GroupState extends EntityState<Group> {
     query: string;
     loadingQuery:{[query: string]: boolean };
    queryMap: {[query: string]: number[] };  // {"ar" [1 3 5]}
    selectedId?: number;
}

const initialState= {
    byId: {},
    query: "",
    queryMap: {}, 
    loadingQuery:{},
}


export const groupReducer : Reducer<GroupState> = (state= initialState, action) =>{
    switch(action.type) {
        case GROUP_QUERY:
        const { query, loading } = action.payload;

                     return {...state, 
                         query: query, 
                        loadingQuery: {...state.loadingQuery,
                             [query]: loading}};   
        case GROUP_QUERY_COMPLETED:
               const groups= action.payload.groups as Group[];
               const groupIds = getIds(groups);
        
            
            // const groupMap = groups.reduce((prev, group) => {
            //           return {...prev, [group.id]: group};
            //           },{});
            
                const newState = addMany(state, groups) as GroupState;     
          
            
                return {
                    ...newState,
                    queryMap: {
                     ...newState.queryMap, 
                     [action.payload.query]: groupIds
                    }, 
                 loadingQuery: {...newState.loadingQuery,
                    [action.payload.query]: false,
                }, 
                //  byId: {...state.byId, ...groupMap},
                };
            // case GET_GROUP:
            //     return addOne(state, action.payload) as GroupState;

        default:
            return state;
    }
}