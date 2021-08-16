import { combineReducers, createStore, applyMiddleware } from "redux";
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { groupReducer } from './reducers/groups.reducer';
import { userReducer } from './reducers/users.reducer';
import { authReducer } from './reducers/auth.reducer';
import { composeWithDevTools } from "redux-devtools-extension";
import { sagaMiddleware } from './sagas/index';
import { watchGroupQueryChanged } from "./sagas/groups.saga";


const reducer = combineReducers ({ 
    users: userReducer,
    groups: groupReducer,
    auth: authReducer,

});



export const store= createStore(reducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    ));
sagaMiddleware.run(watchGroupQueryChanged);
  
export type AppState = ReturnType<typeof store.getState>;

    export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;