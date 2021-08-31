import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const Button = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;

  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const Container = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const MyForm = styled.form`
  background: #f8f9fa;
  padding: 32px 32px 72px 32px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top: 1px solid #e9ecef;
`;

const MyInput = styled.input`
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const ToDoCreate = () => {
  const [open, setOpen] = useState(false);

  const changeState = () => setOpen(true);

  return (
    <>
      {open && (
        <Container>
          <MyForm>
            <MyInput placeholder="New Todo" />
          </MyForm>
        </Container>
      )}
      <Button onClick={changeState} open={open}>
        <MdAdd />
      </Button>
    </>
  );
};

export default ToDoCreate;
