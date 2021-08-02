import { AnyAction, createStore, Reducer } from "redux";
import { Group } from "./models/Group";
import { User } from "./models/User";
import { useSelector, TypedUseSelectorHook } from 'react-redux';

const ME_FETCH= "me/fetch";

export interface AppState{
    me?: User;
    isSidebarOpen: boolean;
    groupQuery: string;
    groupQueryMap: {[query: string]: number[]}; // {ear:[10,20,45], "omn": [1,99]} group ids matching the keywords
    grpups:{ [id: number]: Group};
}

const initialState: AppState = {
    me: undefined,
    groupQueryMap: {},
    groupQuery:'',
    isSidebarOpen: true,
    grpups: {}

};


const reducer: Reducer<AppState, AnyAction> = (currentState = initialState, dispatchedAction: AnyAction) => {
  switch(dispatchedAction.type) {
      case ME_FETCH:
      case 'me/login':
          return {...currentState, me: dispatchedAction.payload}
       default:
          return currentState;
  }

};

export const store= createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

   export const meFetchAction= (u: User) => ({
        type: ME_FETCH, payload: u
    });

    export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;