
import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  width: 100%;
`;

const Button = styled.button`
  background-color: #0077b6;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #023e8a;
  }
`;

const FormContainer = styled.div`
  margin: 2rem 0;
`;

function CreatePlayers({ handleInputChange, handleButtonClick, handleButtonDisabled }) {

  return (
    <FormContainer>
      <Form>
        <Label>
          First Name:
          <Input type="text" name="firstName" onChange={handleInputChange} />
        </Label>
        <Label>
          Last Name:
          <Input type="text" name="lastName" onChange={handleInputChange} />
        </Label>
        <Label>
          Username:
          <Input type="text" name="userName" onChange={handleInputChange} />
        </Label>
        <Label>
          Game Count:
          <Input type="text" name="gameCount" onChange={handleInputChange} />
        </Label>
        <Button type="button" onClick={handleButtonClick} disabled={handleButtonDisabled()}>
          Add Player
        </Button>
      </Form>
    </FormContainer>
  );
}

export default CreatePlayers;

