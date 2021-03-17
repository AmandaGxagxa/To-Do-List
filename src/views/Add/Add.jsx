import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import { TextField, Button } from "@material-ui/core";

const Form = styled.form`
  dispay: flex;
  flex-direction: column;
  align-items:center;
  padding:2rem;
`;
const StyledButton= styled(Button)`
&&{
    margin-top:1rem;
}

`

const Add = () => {
  const [name, setName] =useState('')
  const handleSubmit=(event)=> {
    event.preventDefault();
  }
  return (
    <Layout activePage="add">
      <Form onSubmit={handleSubmit}>
        <TextField label="Task Name" fullWidth variant="outlined" />
        <Button type="submit" variant="contained" size="large">
          Save Item
        </Button>
      </Form>
    </Layout>
  );
};

export default Add;
