import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

export const Complate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const Check = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 24px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const ToDoItem = ({ done, text }) => {
  return (
    <>
      <Container>
        <Check done={done}>{done && <MdDone />}</Check>
        <Text done={done}>{text}</Text>
      </Container>
    </>
  );
};

export default ToDoItem;
