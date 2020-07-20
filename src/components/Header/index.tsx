import React from 'react';
import { FaAngleDown, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { User } from '../../entities/user';
import { Profile } from './Profile';
import { SearchBar } from './SearchBar';
import { Container } from './styles';

interface Props {
  user: User;
}

export function Header(props: Props) {
  return (
    <Container>
      <button>
        <FaAngleLeft className="icon" size="25" />
      </button>
      <button>
        <FaAngleRight className="icon" size="25" />
      </button>

      <SearchBar />
      <Profile avatarUrl={props.user.avatarUrl} name={props.user.name} />
      <button>
        <FaAngleDown className="icon" size="25" />
      </button>
    </Container>
  );
}
