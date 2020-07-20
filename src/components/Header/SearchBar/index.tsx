import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Container } from './styles';

export function SearchBar() {
  return (
    <Container>
      <FaSearch className="icon" size="14" />
      <input type="text" placeholder="Search" />
    </Container>
  );
}
