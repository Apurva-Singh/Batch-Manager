import React from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar";

import Recordings from './Recordings.page';
import Dashboard from './dashboard/Dashboard.page';
import LecturePage from "./Lecture.page";

interface Props{
 
}

const AppContainer: React.FC<Props>=(props)=>{
    return(
        <div className="flex flex-row "> 
         <Sidebar></Sidebar>
        <Switch>
        <Route path="/recordings">
      <Recordings></Recordings>
    </Route >
    <Route path="/dashboard">
      <Dashboard></Dashboard></Route>
      <Route path="/batch/:batchNumber/lecture/:lectureNumber"> 
          <LecturePage />
      </Route>
        </Switch>
        
      
        </div>
  
    );
};
AppContainer.defaultProps={
}

export default AppContainer;