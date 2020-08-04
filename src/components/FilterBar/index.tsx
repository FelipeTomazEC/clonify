import React, { ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ClearButton, Container, InputText } from './styles';

interface Props {
  value: string;
  onChange: (newValue: string) => void;
}

export function FilterBar(props: Props) {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    props.onChange(newValue);
  };

  return (
    <Container fulfilled={!!props.value}>
      <FaSearch size={15} className="icon" />
      <InputText
        value={props.value}
        onChange={handleOnChange}
        placeholder="Filter"
      />
      <ClearButton onClick={() => props.onChange('')}>⨯</ClearButton>
    </Container>
  );
}
