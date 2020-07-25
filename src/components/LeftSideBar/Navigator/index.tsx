import React, { useState } from 'react';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { BsCollection, BsCollectionFill } from 'react-icons/bs';
import { FiRadio } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { NavigationButton } from './NavigationButton';
import { Container } from './styles';

enum NAVIGATION_OPTION {
  HOME,
  BROWSE,
  RADIO,
}

export function Navigator() {
  const [activeLink, setActiveLink] = useState<NAVIGATION_OPTION>(
    NAVIGATION_OPTION.HOME
  );

  return (
    <Container>
      <NavLink to="/application/home">
        <NavigationButton
          icons={{ active: AiFillHome, inactive: AiOutlineHome }}
          isActive={activeLink === NAVIGATION_OPTION.HOME}
          title="Home"
          onClick={() => setActiveLink(NAVIGATION_OPTION.HOME)}
        />
      </NavLink>

      <NavLink to="/application/browse">
        <NavigationButton
          icons={{ active: BsCollectionFill, inactive: BsCollection }}
          isActive={activeLink === NAVIGATION_OPTION.BROWSE}
          title="Browse"
          onClick={() => setActiveLink(NAVIGATION_OPTION.BROWSE)}
        />
      </NavLink>

      <NavLink to="/application/radio">
        <NavigationButton
          icons={{ active: FiRadio, inactive: FiRadio }}
          isActive={activeLink === NAVIGATION_OPTION.RADIO}
          title="Radio"
          onClick={() => setActiveLink(NAVIGATION_OPTION.RADIO)}
        />
      </NavLink>
    </Container>
  );
}
