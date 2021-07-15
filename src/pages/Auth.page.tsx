import React, { memo } from "react";
import { Route, Switch } from "react-router-dom";
import AuthHero from "../components/AuthHero";
import Login from "./Login.page"
import Signup from './Signup.page';

interface Props{
 
}

const Auth: React.FC<Props>=(props)=>{
    return(
        <div className="flex flex-row justify-between"> 
      
        <Switch>
        <Route path="/login">
      <Login></Login>
    </Route >
    <Route path="/signup">
      <Signup></Signup></Route>
        </Switch>
        <AuthHero></AuthHero>
      </div>  
    );
};
Auth.defaultProps={
}

export default memo(Auth);