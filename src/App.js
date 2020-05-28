import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { LeftSideBar } from "./components/LeftSideBar";

function App() {
  const user = {
    name: "Felipe Tomaz",
    avatarUrl:
      "https://scontent.fplu15-1.fna.fbcdn.net/v/t1.0-9/90304791_3035122643218732_8078960168131362816_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeHCM586RIHGpAeD-QVOGKcq1Qb422MV-ePVBvjbYxX548Vr42wDzsHMU2QRfzSbsSSJTu3r5rXSwr7EuqT5g236&_nc_ohc=X9jguLQt_mUAX_1QyA7&_nc_ht=scontent.fplu15-1.fna&oh=aef3ffce0192c4839b5fbd03f6e3ca9d&oe=5EF4BEA6",
  };
  return (
    <div className="App">
      <Header user={user} className="header" />
      <LeftSideBar className="left" />
    </div>
  );
}

export default App;
