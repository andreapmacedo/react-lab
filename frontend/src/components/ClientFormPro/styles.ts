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

export const SectionTitle = styled.h2`
  font-size: 20px;
  color: #e0e0e0;
  margin-top: 30px;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 10px;
  font-weight: 600;
  margin-bottom: 20px;

  cursor: pointer;
  &:hover {
    color: #007bff;
  }
`;

const AddRemoveButton = styled.button`
  margin: 10px 0;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const SubmitButton = styled(Input).attrs({ type: 'submit' })`
  background-color: #007BFF;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.disabled ? '#007BFF' : '#0056b3'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// export const SubmitButton = styled(Input).attrs({ type: 'submit' })`
//   background-color: #007BFF;
//   color: white;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;
