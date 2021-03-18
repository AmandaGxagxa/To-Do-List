import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import { Checkbox, IconButton } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const Item = styled.li`
border-bottom:1px dotted #dfb2f4;
  padding: 0.5rem 1rem;
  margin: 0.1rem 0;
  display:flex;
  width:100%;
  align-items;center
`;
const Name = styled.h2`
  // to give all the space between icons and text
  flex-grow: 1;
  text-align: center;
  font-size: 1.1rem;
`;
const Task = (props) => {
  // distructuring
  const { id, name, checked ,onCheckToggle ,onDeleteItem} = props;
  const handleCheckToggle =()=>onCheckToggle(id);
  const handleDeleteItem =()=>onDeleteItem(id);

  return (
    <Item>
      <Checkbox checked={checked} onChange={handleCheckToggle} />
      <Name>{name}</Name>
      <div>
        <IconButton href={`#/edit/${id}`}>
          <Edit />
        </IconButton>

        <IconButton onClick={handleDeleteItem}>
          <Delete />
        </IconButton>
      </div>
    </Item>
  );
};

const Home = (props) => {
  // this is just an empty array
  const { list, onCheckToggle ,onDeleteItem} = props;
  return (
    <Layout activePage="home">
      <List>
        {/* looping over the list and set it to task */}
        {list.map(({ id, name, checked }) => (
          // assigning these directly to the taskes created above
          <Task
            key={id}
            id={id}
            name={name}
            checked={checked}
            onCheckToggle={onCheckToggle}
            onDeleteItem={onDeleteItem}

          />
        ))}
      </List>
    </Layout>
  );
};

export default Home;
