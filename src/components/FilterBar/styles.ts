import styled from 'styled-components';

interface Props {
  fulfilled: boolean;
}

export const Container = styled.div<Props>`
  width: 100%;
  height: 35px;
  border-radius: 3px;
  margin: 8px 0;
  outline: none;
  border: none;
  background-color: ${(props) => (props.fulfilled ? '#464545' : 'transparent')};
  color: #b2afae;
  display: inline-flex;
  align-items: center;

  > * {
    background-color: transparent;
    outline: none;
    border: none;
  }

  :hover {
    .icon,
    button,
    input::placeholder {
      color: #fff;
    }
  }

  .icon {
    color: rgba(255, 255, 255, 0.6);
    margin: auto 12px;
  }
`;

export const InputText = styled.input`
  width: 100%;
  color: #fff;
  padding: 0 5px;
  font-size: 0.9rem;
`;

export const ClearButton = styled.button`
  width: 30px;
  height: 35px;
  font-size: 1.5rem;
  font-weight: 100;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.6);
`;
