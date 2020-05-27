import React from "react";
import { FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Profile } from "./Profile";
import { SearchBar } from "./SearchBar";
import { Container } from "./styles";

export function Header({ user }) {
  return (
    <Container>
      <button>
        <FaAngleLeft className="icon" size="25" />
      </button>
      <button>
        <FaAngleRight className="icon" size="25" />
      </button>

      <SearchBar />
      <Profile avatarUrl={user.avatarUrl} name={user.name} />
      <button>
        <FaAngleDown className="icon" size="25" />
      </button>
    </Container>
  );
}
