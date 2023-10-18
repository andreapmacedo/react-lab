import styled from 'styled-components';

export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  align-self: flex-start;  // Alinha o label à esquerda do InputWrapper
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007BFF;
    outline: none;
  }
`;

export const SubmitButton = styled(Input).attrs({ type: 'submit' })`
  background-color: #007BFF;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
