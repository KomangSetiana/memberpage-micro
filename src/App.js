import { createBrowserHistory } from "history";
import React, { useEffect } from "react";
import "assets/css/style.css";
import { Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import MemberRoute from "./components/Routes/MemberRoute";
import GuestRoute from "components/Routes/GuestRoute";

import Login from "pages/Login";
import NotFound from "pages/404";
import MyClass from "pages/MyClass";
import Unauthenticated from "pages/401";
import Register from "pages/Register";
import { populateProfile } from "store/actions/users";
import { setAuthorizationHandler } from "configs/axios";
import users from "constans/api/users";
import Joined from "pages/Join";
import DetailsClass from "pages/DetailsClass";

function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

  const dispatch = useDispatch();

  useEffect(() => {
    let session = null;
    if (localStorage.getItem("BWAMICRO:token")) {
      session = JSON.parse(localStorage.getItem("BWAMICRO:token"));

      setAuthorizationHandler(session?.token);

      users.details().then((detail) => {
        dispatch(populateProfile(detail));
      });
    }
  }, [dispatch]);

  return (
    <>
      <Router history={history}>
        <Switch>
          <GuestRoute path="/login" component={Login}></GuestRoute>
          <GuestRoute path="/register" component={Register}></GuestRoute>
          <GuestRoute path="/private" component={Unauthenticated}></GuestRoute>

          <MemberRoute exact path="/" component={MyClass}></MemberRoute>
          <MemberRoute
            exact
            path="/joined/:class"
            component={Joined}
          ></MemberRoute>

          <MemberRoute
            exact
            path="/courses/:class/:chapter/:uid"
            component={DetailsClass}
          ></MemberRoute>

          <MemberRoute
            exact
            path="/courses/:class/"
            component={DetailsClass}
          ></MemberRoute>

          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
