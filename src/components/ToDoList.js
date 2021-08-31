import React from "react";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";

const List = styled.div`
  flex: 1;
  padding: 20px 24px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const ToDoList = () => {
  return (
    <List>
      <ToDoItem text="Hello1" done={true} />
      <ToDoItem text="Hello2" done={true} />
      <ToDoItem text="Hello3" done={false} />
      <ToDoItem text="Hello4" done={false} />
    </List>
  );
};

export default ToDoList;
