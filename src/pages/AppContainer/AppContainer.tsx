import { Route, Switch } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Recordings from './Recordings.page';
import Dashboard from './dashboard/Dashboard.page';
import LecturePage from "./Lecture.page";
import { User } from "../../models/User";
import GroupDetails from './dashboard/GroupDetails';
import Nav from "./dashboard/Nav";
import SecondaryNav from "./dashboard/SecondaryNav";

interface Props{
 user: User;
}

const AppContainer: React.FC<Props>=(props)=>{
  
    return(
      
        <div className=""> 
          <Nav />
      <SecondaryNav />
           <div className="hidden md:block">
            <Sidebar/>
            </div>
        <Switch>
        <Route path="/recordings">
      <Recordings></Recordings>
    </Route >
    <Route path="/dashboard">
      <Dashboard ></Dashboard></Route>
      <Route path="/batch/:batchNumber/lecture/:lectureNumber"> 
          <LecturePage />
      </Route>
      <Route path="/groups/:groupId">
      <GroupDetails></GroupDetails>
    </Route >
        </Switch>
        </div>
  
    );
};
AppContainer.defaultProps={
}

export default AppContainer;