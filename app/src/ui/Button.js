import styled from 'styled-components';

export const ButtonPrimary = styled.button`
  background-color: ${(prop) => (prop.isSelected ? '#f22f2f' : '#ff4343')};
  outline: 1px solid ${(prop) => (prop.isSelected ? 'white' : '#ff4343')};

  height: fit-content;
  width: fit-content;

  padding: 6px 12px;

  border-radius: 5px;
  border: none;

  color: white;

  cursor: pointer;

  &:hover {
    background-color: #f22f2f;
  }
`;
