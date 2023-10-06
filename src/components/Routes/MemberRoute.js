import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

const MenberRoute = ({
  component: Component,
  match,
  path,
  location,
  ...rest
}) => {
  const ok = localStorage.getItem("BWAMICRO:token");
  localStorage.removeItem("BWAMICRO:redirect");

  return (
    <Route
      {...rest}
      render={(props) =>
        ok ? (
          <Component {...props} />
        ) : path === "/joined/:class" ? (
          <Redirect to={`/login?path=${location.pathname}`} />
        ) : (
          <Redirect to={`/private?path=${location.pathname}`} />
        )
      }
    />
  );
};

export default withRouter(MenberRoute);
