import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLogged } from "../services/authentication";

export function PrivateRoute({ component: Component, ...otherProps }) {
  return (
    <Route
      {...otherProps}
      render={(props) =>
        isLogged() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
