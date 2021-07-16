import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AppContainer from './pages/AppContainer';
import Auth from './pages/Auth.page';
import NotFound from './pages/NotFound.page';


function App() {
  return (
    <div className="font-sans">
  <BrowserRouter>
  <Switch>
    
    <Route path="/" exact>
      <Redirect to="/login"></Redirect>
    </Route>
    <Route path={["/login", "/signup"]} exact>
      <Auth />
    </Route>
    <Route path={["/dashboard","/recordings","/batch/:batchNumber/lecture/:lectureNumber"]} exact>
      <AppContainer></AppContainer>
    </Route>
    <Route>
      <NotFound />
    </Route>
  
  </Switch>
  </BrowserRouter>
  </div>
  );
}

export default App;
