import { createSelector } from 'reselect';
import { authStateSelector, userStateSelector } from './app.selectors';



const authIdSelector = createSelector([authStateSelector],
    (authState) => authState.id);

    
export const userByIdSelector = createSelector([userStateSelector], 
    (userState) => userState.byId); 


export const meSelector = createSelector([authIdSelector, userByIdSelector], (id, byId) =>
   ( id === undefined) ? undefined : byId[id]);






// export const meSelector= (state: AppState) => (state.auth.id !== undefined) ? state.users.byId[state.auth.id] : 
// undefined;