import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import { TextField, Button } from "@material-ui/core";
import {useParams}   from 'react-router-dom';
const Form = styled.form`
  dispay: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;
const StyledButton = styled(Button)`
  && {
    margin-top: 1rem;
  }
`;

const Edit = (props) => {
  const { onSave, initialName } = props;
  const { taskId } = useParams();

  const [name, setName] = useState(initialName || "");

  const handleTextChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(taskId, name);
    console.log(taskId +" srdftghjhk " +name)
  };
  return (
    <Layout activePage="edit">
      <Form onSubmit={handleSubmit}>
        <TextField
          onChange={handleTextChange}
          label="Task Name"
          fullWidth
          variant="outlined"
          value={name}
        />

        <StyledButton href="#/" type="submit" variant="contained" size="large">
          Cancel
        </StyledButton>

        <StyledButton
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={name.trim()===""}
          
        >
          Save Changes
        </StyledButton>
      </Form>
    </Layout>
  );
};

export default Edit;
