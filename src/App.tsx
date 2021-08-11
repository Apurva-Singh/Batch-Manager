import React, { FC, Suspense, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { me } from './middleware/auth.middleware';
import { LOGIN_TOKEN } from './api/base';
import AppContainerPageLazy from './pages/AppContainer/AppContainer.lazy';
import AuthLazy from './pages/Auth/Auth.lazy';
import NotFound from './pages/NotFound.page';
import UserProfile from './pages/UserProfile';
import { meSelector } from './selectors/auth.selectors';
import Spinner from "./Spinner.gif"; 
import { useAppSelector } from './store';
import GroupsToDisplay from './pages/AppContainer/dashboard/GroupsToDisplay';
  interface Props{

  }


const App: FC<Props> = () => {

const user = useAppSelector(meSelector);

  
  const token= localStorage.getItem(LOGIN_TOKEN);

  useEffect(() =>{
        if(!token){
          return;
        }
         me();
        return;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  if(!user && token){
    return <div> Loading....</div>
  }

  return (
    // <AppContext.Provider value={{user,setUser}}>
    <Suspense fallback={<div className="text-green-600 h-screen block " ><img src={Spinner} alt="Loading..." className="h-10 w-10 m-auto mt-auto" /></div>} >
    <div className="font-sans">
  <BrowserRouter>
  <Switch>
    
    <Route path="/" exact> 
    {user ? <Redirect to="/dashboard" /> : <Redirect to="/login"></Redirect>}
    </Route>
    <Route path={["/login", "/signup"]} exact>
      
    {user ? <Redirect to="/dashboard" /> : <AuthLazy /> }
   
    </Route>
    <Route path={["/dashboard","/recordings","/batch/:batchNumber/lecture/:lectureNumber"]} exact>
    {user ?  <AppContainerPageLazy user={user!} /> :  <Redirect to="/login"></Redirect>} 
    </Route>
    <Route path="/profile" exact>
      {user && <UserProfile></UserProfile>}
    </Route>
    <Route path="/groups" exact>
      {user && <GroupsToDisplay></GroupsToDisplay>
      }
    </Route>

    <Route>
      <NotFound />
    </Route>
  
  </Switch>
  </BrowserRouter>
  </div>
  </Suspense>
  // </AppContext.Provider>
  );
}

export default App;
