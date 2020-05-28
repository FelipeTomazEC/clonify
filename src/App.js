import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { LeftSideBar } from "./components/LeftSideBar";
import { Browse } from "./pages/Browse";
import { Home } from "./pages/Home";
import { Radio } from "./pages/Radio";

function App() {
  const user = {
    name: "Felipe Tomaz",
    avatarUrl:
      "https://scontent.fplu15-1.fna.fbcdn.net/v/t1.0-9/90304791_3035122643218732_8078960168131362816_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeHCM586RIHGpAeD-QVOGKcq1Qb422MV-ePVBvjbYxX548Vr42wDzsHMU2QRfzSbsSSJTu3r5rXSwr7EuqT5g236&_nc_ohc=X9jguLQt_mUAX_1QyA7&_nc_ht=scontent.fplu15-1.fna&oh=aef3ffce0192c4839b5fbd03f6e3ca9d&oe=5EF4BEA6",
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header user={user} className="header" />
        <LeftSideBar className="left" />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/browse" component={Browse} />
          <Route path="/radio" component={Radio} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
