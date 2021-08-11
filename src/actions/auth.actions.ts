import { bindActionCreators } from "redux";
import { User } from "../models/User";
import { store } from "../store";
import { ME_FETCH, ME_LOGIN, MODIFY_USER } from "./action.constants";


export const modifyAction= (u: User) => ({
    type: MODIFY_USER, payload: u
});

export const meFetchAction= (u: User) => ({
    type: ME_FETCH, payload: u
});

export const meLoginAction= (u: User) => ({
    type: ME_LOGIN, 
    payload: u
});


export const authActions = bindActionCreators({
fetch: meFetchAction,
login: meLoginAction
},store.dispatch);

