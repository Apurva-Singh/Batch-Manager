import React, { memo } from "react";
import { Route, Switch } from "react-router-dom";
import AuthHero from "../../components/AuthHero";
import { User } from "../../models/User";
import Login from "./Login.page";
import Signup from "./Signup.page";

interface Props {
  onLogin: (user: User) => void;
}

const Auth: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-row justify-between">
      <Switch>
        <Route path="/login">
          <Login onLogin={props.onLogin}></Login>
        </Route>
        <Route path="/signup">
          <Signup></Signup>
        </Route>
      </Switch>
      <AuthHero></AuthHero>
    </div>
  );
};
Auth.defaultProps = {};

export default memo(Auth);
