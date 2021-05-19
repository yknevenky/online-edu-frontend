import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateClassroom from "./Components/CreateClassroom";
import JoinClassroom from "./Components/JoinClassroom";
import MakeAnnouncement from "./Components/MakeAnnouncement";
import NavBar from "./Components/NavBar";
import PlansOffered from "./Components/PlansOffered";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import AnnouncementScreen from "./Screen/AnnouncementScreen";
import Classroom from "./Screen/Classroom";
import Home from "./Screen/Home";
import Profile from "./Screen/Profile";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create-classroom" component={CreateClassroom} />
        <Route path="/join-classroom" component={JoinClassroom} />
        <Route path="/make-announcement" component={MakeAnnouncement} />
        <Route path="/plans-offered" component={PlansOffered} />
        <Route path="/announcement-screen" component={AnnouncementScreen} />
        <Route path="/profile" component={Profile} />
        <Route path="/classroom" component={Classroom} />


      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
