import React from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import ToDoLayout from "./components/ToDoLayout";
import ToDoHead from "./components/ToDoHead";
import ToDoList from "./components/ToDoList";
import ToDoCreate from "./components/ToDoCreate";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #e9ecef;
    font-family: 'Roboto', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <ToDoLayout>
        <ToDoHead />
        <ToDoList />
        <ToDoCreate />
      </ToDoLayout>
    </>
  );
}

export default App;
