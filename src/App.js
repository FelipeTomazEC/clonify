import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Application } from "./pages/Application";
import { ConfirmAuthentication } from "./pages/ConfirmAuthentication";
import { Login } from "./pages/Login";
import { PrivateRoute } from "./routes/private-route";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login} />
        <Route
          path="/authentication-callback"
          component={ConfirmAuthentication}
        />
        <PrivateRoute path="/home" component={Application} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
