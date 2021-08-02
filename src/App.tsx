import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { me } from './api';
import { LOGIN_TOKEN } from './api/base';
import AppContainerPageLazy from './pages/AppContainer/AppContainer.lazy';
import AuthLazy from './pages/Auth/Auth.lazy';
import NotFound from './pages/NotFound.page';
import UserProfile from './pages/UserProfile';
import Spinner from "./Spinner.gif"; 
import { meFetchAction, useAppSelector } from './store';
  interface Props{

  }


const App: FC<Props> = () => {

const user = useAppSelector((state) => state.me);

 const dispatch = useDispatch();

  // const [user,setUser]= useState<User>();
  
  const token= localStorage.getItem(LOGIN_TOKEN);

  useEffect(() =>{
        if(!token){
          return;
        }
        me().then((u) => dispatch(meFetchAction(u)));
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
