
import { User } from './../models/User';
import { Reducer } from 'redux';
import { ME_FETCH, ME_LOGIN } from '../actions/action.constants';
import { EntityState, addOne } from './entity.reducer';
import { MODIFY_USER } from './../actions/action.constants';

export interface UserState extends EntityState<User> {}

const initialState = {
    byId: {},
}

export const userReducer: Reducer<UserState>= (state= initialState, action) => {
    switch(action.type) {
        case ME_FETCH:
        case ME_LOGIN:
            // const user= action.payload as User;
            //     return {...state, byId: { ...state.byId, [user.id]: user }};  // byId : { 23: {user ka obj}}
            return addOne(state, action.payload) as UserState;
        // case MODIFY_USER:
        //     return addOne(state, action.payload) as UserState;
        default:
            return state;
    }
}