import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavigationButton } from "./NavigationButton";
import { Nav } from "./styles";

export function BrowseNavigator() {
  const [active, setActive] = useState("genres and moods");
  const categories = [
    "genres and moods",
    "podcasts",
    "charts",
    "new releases",
    "discover",
    "more",
  ];

  return (
    <Nav>
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>
            <NavLink to={`/application/browse/${cat.replace(/\s/g, "-")}`}>
              <NavigationButton
                isActive={active === cat}
                text={cat}
                handleClick={() => setActive(cat)}
              />
            </NavLink>
          </li>
        ))}
      </ul>
    </Nav>
  );
}
