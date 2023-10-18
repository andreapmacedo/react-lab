import styled from 'styled-components';

export const StyledSelect = styled.select`
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #dcdcdc;
  appearance: none;
  background-color: #fff;
  transition: border-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    border-color: #a8a8a8;
  }

  &:focus {
    outline: none;
    border-color: #4285F4;
  }
`;