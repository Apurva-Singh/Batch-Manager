
import { createSelector } from 'reselect';
import { groupStateSelector } from './app.selectors';
// export const groupQuerySelector = (state: AppState)  => state.groups.query;

// export const groupQuerySelector = (state: AppState) => {
//     const groupState= groupStateSelector(state);
//     return groupState.query;
// }

export const groupQuerySelector= createSelector([groupStateSelector],
    (groupState) =>{
     return groupState.query
    });





// const groupQueryMapSelector= (state: AppState) => {
//     const groupState= groupStateSelector(state);
//     return groupState.queryMap;
// }
export const groupQueryMapSelector= createSelector([groupStateSelector],
    (groupState) => groupState.queryMap);


// const groupByIdSelector = (state: AppState) => {
    
//     const groupState= groupStateSelector(state);
//     return groupState.byId;
// }

export const groupByIdSelector = createSelector([groupStateSelector], 
    (groupState) => groupState.byId); 

// export const groupSelector = (state: AppState) => {
//     const groupIds = state.group s.query Map[state.groups.query] ||  [];
//     const groups = groupIds.map(id => state.groups.byId[id]);
//     return groups;
// }
 
export const groupsLoadingSelector = createSelector(
    [groupStateSelector],
     (groupState) => groupState.loading 
     );  // {omn: loading true}

// export const groupLoadingSelector = createSelector(
//     [groupQuerySelector, groupLoadingQuerySelector], (query, loadingMap) => 
//     loadingMap[query]
// );

// export const groupSelector = (state: AppState) => {
//     const query= groupQuerySelector(state);
//     const queryMap = groupQueryMapSelector(state);
//     const byId = groupByIdSelector(state);
//     const groupIds = queryMap[query] ||  [];
//     const groups = groupIds.map(id => byId[id]);
//     return groups;
// }

export const groupSelector= createSelector([groupQuerySelector, groupQueryMapSelector, groupByIdSelector],
    (query, queryMap, byId) => {
        const groupIds = queryMap[query] ||  [];
            const groups = groupIds.map(id => byId[id]);
            return groups;
    });