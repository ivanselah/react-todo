import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  width: 512px;
  height: 768px;
  background-color: #ffff;
  border-radius: 15px;
  position: relative;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-top: 90px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

const ToDoLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default ToDoLayout;
