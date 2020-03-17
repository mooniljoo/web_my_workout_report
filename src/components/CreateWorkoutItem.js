import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdAddBox } from "react-icons/md";
import styled from "styled-components";
import { addWorkout } from "../modules/routines";

function CreateWorkoutItem({ id }) {
  const [text, setText] = useState("");

  //디스패치
  const dispatch = useDispatch();

  const onCreate = (id, text) => dispatch(addWorkout(id, text));

  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onCreate(id, text);
    setText(""); // 인풋 초기화
  };
  return (
    <form onSubmit={onSubmit}>
      <Input
        id={id}
        value={text}
        placeholder="Input your Item"
        onChange={onChange}
        required
      />
      <button type="submit">
        <MdAddBox />
      </button>
    </form>
  );
}

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

export default CreateWorkoutItem;
