import { combineReducers, createStore } from "redux";
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { groupReducer } from './reducers/groups.reducer';
import { userReducer } from './reducers/users.reducer';
import { authReducer } from './reducers/auth.reducer';



// export interface AppState{
//     auth: AuthState;
//     isSidebarOpen: boolean;
//     users: UserState; 
//     groups: GroupState;
//     // groupQuery: string;
//     // groupQueryMap: {[query: string]: number[]}; // {ear:[10,20,45], "omn": [1,99]} group ids matching the keywords
 
//     // groups:{ [id: number]: Group};  // {5: 5th id ka group ka object}
// }

// const initialState: AppState = {
//     me: undefined,
//     groupQueryMap: {},
//     groupQuery:'',
//     isSidebarOpen: true,
//     groups: {}

// };

const reducer = combineReducers ({ 
    users: userReducer,
    groups: groupReducer,
    auth: authReducer,

});


// switch(action.type) {
//     case ME_FETCH:
//     case ME_LOGIN:
//         return {...state, me: action.payload}
//      case GROUP_QUERY:
//          return {...state, groupQuery: action.payload };
//       case GROUP_QUERY_COMPLETED:
//           const groups= action.payload.groups as Group[];
//           const groupIds = groups.map(g => g.id);

//        const groupMap = groups.reduce((prev, group) => {
//               return {...prev, [group.id]: group};
//           },{});


//           return {...state,
//               groupQueryMap: {...state.groupQueryMap, [action.payload.query]: groupIds}, 
//               groups: {...state.groups, ...groupMap},
//           }
//      default:
//         return state;
// }

export const store= createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  
type AppState = ReturnType<typeof store.getState>;

    export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;