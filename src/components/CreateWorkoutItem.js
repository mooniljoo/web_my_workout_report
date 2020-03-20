import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdAdd } from "react-icons/md";
import styled, { css } from "styled-components";
import { addWorkout } from "../modules/routines";

function CreateWorkoutItem({ id }) {
  const [text, setText] = useState("");

  //모듈로 액션 보내기
  const dispatch = useDispatch();

  const onAddWorkout = text => dispatch(addWorkout(text));

  //로컬 함수
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onAddWorkout(text);
    setText(""); // 인풋 초기화
  };
  return (
    <Form onSubmit={onSubmit}>
      <Input
        id={id}
        value={text}
        placeholder="Input your Item"
        onChange={onChange}
        required
      />
      <Button type="submit">
        <MdAdd size="100%" />
      </Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  padding: 5px 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 90%;
  height: 35px;
  font-size: 28px;
  color: #343a40;
  font-weight: bold;
  border: none;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 10%;
  padding: 0;
  display: flex;
  border: none;
  box-sizing: border-box;
  border-radius: 50%;
  cursor: pointer;
  color: white;

  transition: 0.125s all ease-in;
  background: #38d9a9;
  &:hover {
    transform: scale(1.1);
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
`;

export default CreateWorkoutItem;
