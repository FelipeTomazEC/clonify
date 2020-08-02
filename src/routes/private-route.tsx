import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogged } from '../services/authentication';

interface Props {
  component: React.FC<{ [key: string]: any }>;
  path: string;
}

export function PrivateRoute(props: Props) {
  const Component = props.component;

  return (
    <Route
      path={props.path}
      render={(props) =>
        isLogged() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
