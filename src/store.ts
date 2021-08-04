import { AnyAction, createStore, Reducer } from "redux";
import { Group } from "./models/Group";
import { User } from "./models/User";
import { useSelector, TypedUseSelectorHook } from 'react-redux';

export const ME_FETCH= "me/fetch";
export const ME_LOGIN= "me/login";
export const GROUP_QUERY= "groups/query";
export const GROUP_QUERY_COMPLETED= "groups/query_completed";

export interface AppState{
    me?: User;
    isSidebarOpen: boolean;
    groupQuery: string;
    groupQueryMap: {[query: string]: number[]}; // {ear:[10,20,45], "omn": [1,99]} group ids matching the keywords
    groups:{ [id: number]: Group};  // {5: 5th id ka group ka object}
}

const initialState: AppState = {
    me: undefined,
    groupQueryMap: {},
    groupQuery:'',
    isSidebarOpen: true,
    groups: {}

};


const reducer: Reducer<AppState, AnyAction> = (state = initialState, action: AnyAction) => {
  switch(action.type) {
      case ME_FETCH:
      case ME_LOGIN:
          return {...state, me: action.payload}
       case GROUP_QUERY:
           return {...state, groupQuery: action.payload };
        case GROUP_QUERY_COMPLETED:
            const groups= action.payload.groups as Group[];
            const groupIds = groups.map(g => g.id);

         const groupMap = groups.reduce((prev, group) => {
                return {...prev, [group.id]: group};
            },{});


            return {...state,
                groupQueryMap: {...state.groupQueryMap, [action.payload.query]: groupIds}, 
                groups: {...state.groups, ...groupMap},
            }
       default:
          return state;
  }

};

export const store= createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

   export const meFetchAction= (u: User) => ({
        type: ME_FETCH, payload: u
    });

    export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;