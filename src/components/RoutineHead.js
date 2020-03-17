import React, { useState } from "react";
import styled, { css } from "styled-components";
import CreateWorkoutItem from "./CreateWorkoutItem";
import { MdEdit } from "react-icons/md";
//import { useRoutineState } from "../RoutineContext";

const RoutineHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h2 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const Modify = styled.span`
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  &:hover {
    border-bottom: 1px solid #343a40;
  }
  svg {
    width: 18px;
    height: 100%;
    fill: #343a40;
  }
  ${props =>
    props.open &&
    css`
      border-bottom: 1px solid #343a40;
      &:hover {
        border-bottom: 1px solid #343a40;
      }
      &:active {
        border-bottom: 1px solid rgba(255, 255, 255, 0);
        opacity: 0.8;
      }
    `}
`;

function RoutineHead({ onCreate, workouts, id }) {
  //const todos = useRoutineState();
  //const undoneTasks = todos.filter(todo => !todo.done);
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  return (
    <RoutineHeadBlock>
      <div>id{id}</div>
      <h2>
        <Modify onClick={onToggle} open={open}>
          {/* {open ? 
          {workouts.title}:<input type="text" placeholder="Input Your Title" value={workouts.title}/><MdEdit />} */}
        </Modify>
      </h2>
      <h2>
        {dateString}
        <span className="day">{dayName}</span>
      </h2>
      <h2>
        <Modify onClick={onToggle} open={open}>
          {workouts.desc}
          {open && <MdEdit />}
        </Modify>
      </h2>
      {/* <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div> */}
      <CreateWorkoutItem id={id} onCreate={onCreate} />
    </RoutineHeadBlock>
  );
}

export default RoutineHead;
