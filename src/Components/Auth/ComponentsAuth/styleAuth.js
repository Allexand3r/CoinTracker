// styles.js
import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #0a66c2;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #095bb2;
  }

  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
`;

export const Message = styled.p`
  margin-top: 10px;
  color: ${(props) => props['data-iserror'] ? 'red' : props.color || 'inherit'};
`;

export const GoogleButton = styled.button`
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: #db4437;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #c33d2d;
  }
`;
