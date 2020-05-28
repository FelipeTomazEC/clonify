import React from "react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { BsCollection, BsCollectionFill } from "react-icons/bs";
import { FiRadio } from "react-icons/fi";
import { NavigationButton } from "./NavigationButton";
import { Container } from "./styles";

export function LeftSideBar({ className }) {
  return (
    <Container className={className}>
      <nav>
        <NavigationButton
          DisableIcon={AiOutlineHome}
          EnableIcon={AiFillHome}
          isActive={true}
          title="Home"
          onClick={() => console.log("Clicked in Home Button.")}
        />

        <NavigationButton
          DisableIcon={BsCollection}
          EnableIcon={BsCollectionFill}
          isActive={false}
          title="Browse"
          onClick={() => console.log("Clicked in Browse Button.")}
        />

        <NavigationButton
          DisableIcon={FiRadio}
          EnableIcon={FiRadio}
          isActive={false}
          title="Radio"
          onClick={() => console.log("Clicked in Radio Button.")}
        />
      </nav>
    </Container>
  );
}
