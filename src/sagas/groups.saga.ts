import {  put, takeEvery } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { groupsQueryActionCompleted } from "../actions/groups.actions";
import { GROUP_QUERY_CHANGED } from './../actions/action.constants';
import { getGroups as getGroupsAPI  } from './../api/group';
import * as Effects from "redux-saga/effects";

const call: any = Effects.call;

export function* getGroups (action: AnyAction): Generator<any>{
    
   const groups: any = yield call(getGroupsAPI,
     {query: action.payload, 
    status: "all-groups",  
});

   yield put(groupsQueryActionCompleted(action.payload, groups)); 
}
 

export function* watchGroupQueryChanged() {
    yield takeEvery(GROUP_QUERY_CHANGED, getGroups);
}