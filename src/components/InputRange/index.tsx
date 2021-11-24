import React from 'react';
import { ChangeEventHandler } from 'react-router/node_modules/@types/react';
import { Input } from './styles';

interface Props {
  minValue?: number;
  maxValue?: number;
  onChange: (value: number) => void;
  value: number;
}

export const InputRange: React.FC<Props> = (props) => {
  const { minValue = 0, maxValue=100, value } = props;
  const onChangeValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newValue = parseInt(event.target.value);
    props.onChange(newValue);
  }

  return <Input
    type="range"
    value={value}
    onChange={onChangeValue}
    min={minValue}
    max={maxValue}
  />;
}