import React, { useState } from "react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { BsCollection, BsCollectionFill } from "react-icons/bs";
import { FiRadio } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { NavigationButton } from "./NavigationButton";
import { Container } from "./styles";

export function Navigator() {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <Container>
      <NavLink to="/home">
        <NavigationButton
          DisableIcon={AiOutlineHome}
          EnableIcon={AiFillHome}
          isActive={activeLink === "home"}
          title="Home"
          onClick={() => setActiveLink("home")}
        />
      </NavLink>

      <NavLink to="/browse">
        <NavigationButton
          DisableIcon={BsCollection}
          EnableIcon={BsCollectionFill}
          isActive={activeLink === "browse"}
          title="Browse"
          onClick={() => setActiveLink("browse")}
        />
      </NavLink>

      <NavLink to="/radio">
        <NavigationButton
          DisableIcon={FiRadio}
          EnableIcon={FiRadio}
          isActive={activeLink === "radio"}
          title="Radio"
          onClick={() => setActiveLink("radio")}
        />
      </NavLink>
    </Container>
  );
}
