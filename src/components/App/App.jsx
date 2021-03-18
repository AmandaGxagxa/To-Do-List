import React, { useState, useEffect } from "react";
import { v4 as createId } from "uuid";
import { HashRouter, Switch, Route, useParams } from "react-router-dom";

import Home from "../../views/Home/Home";
import Add from "../../views/Add/Add";
import Edit from "../../views/Edit/Edit";

const EditWrapper = (props) => {
  const { list, ...remainingProps } = props;
  const { taskId } = useParams();
  const { name } = list.find((item) => item.id === taskId);

  return <Edit {...remainingProps} taskId={taskId} initialName={name} />;
};

const App = () => {
  const [list, setList] = useState([]);
  //determining if the local storage is loaded
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const listAsString = window.localStorage.getItem("list");
    if (listAsString) {
      setList(JSON.parse(listAsString));
    }
    setLoaded(true);
  }, []);

  useEffect(
    () => {
    if(loaded){
      window.localStorage.setItem(
        "list",
        //local storage can only save strings hence you must stringify
        JSON.stringify(list),
      )
      }
    },
      [list, loaded],
  
  );
  //Allow to and item and after the ad button clicked redirect to home page and display
  const handleAddItem = (name) => {
    setList([{ id: createId(), name, checked: false }, ...list]);
    window.location.replace("#/");
  };
  const handleDeleteItem = (taskId) => {
    const newList = list.filter((item) => item.id !== taskId);
    setList(newList);
    // window.location.replace("#/");
  };
  const handleCheckToggle = (taskId) => {
    const newList = list.map((item) => {
      if (item.id !== taskId) return item;

      return {
        ...item,
        //check value is equal to the current checked value
        checked: !item.checked,
      };
    });
    setList(newList);
  };

  const handleEditItem = (taskId, name) => {
    const newList = list.map((item) => {
      if (item.id !== taskId) return item;

      return {
        ...item,
        name,
      };
    });
    setList(newList);
    window.location.replace("#/");
  };

  return (
    <HashRouter>
      <Switch>
        <Route path="/edit/:taskId">
          <EditWrapper onSave={handleEditItem} list={list} />
        </Route>
        <Route path="/Add/">
          <Add onSave={handleAddItem} />
        </Route>

        <Route path="/">
          <Home
            list={list}
            onCheckToggle={handleCheckToggle}
            onDeleteItem={handleDeleteItem}
          />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
