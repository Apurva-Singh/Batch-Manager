import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { LOGIN_TOKEN } from './api/base';
import AppContainerPageLazy from './pages/AppContainer/AppContainer.lazy';
import AuthLazy from './pages/Auth/Auth.lazy';
import NotFound from './pages/NotFound.page';
import Spinner from "./Spinner.gif"; 



function App() {
  const token= localStorage.getItem(LOGIN_TOKEN);
  return (
    <Suspense fallback={<div className="text-green-600 h-screen block " ><img src={Spinner} alt="Loading..." className="h-10 w-10 m-auto mt-auto" /></div>} >
    <div className="font-sans">
  <BrowserRouter>
  <Switch>
    
    <Route path="/" exact> 
    {token ? <Redirect to="/dashboard" /> : <Redirect to="/login"></Redirect>}
    </Route>
    <Route path={["/login", "/signup"]} exact>
      
    {token ? <Redirect to="/dashboard" /> : <AuthLazy /> }
   
    </Route>
    <Route path={["/dashboard","/recordings","/batch/:batchNumber/lecture/:lectureNumber"]} exact>
    {token ?  <AppContainerPageLazy /> :  <Redirect to="/login"></Redirect>} 
    </Route>
    <Route>
      <NotFound />
    </Route>
  
  </Switch>
  </BrowserRouter>
  </div>
  </Suspense>
  );
}

export default App;
