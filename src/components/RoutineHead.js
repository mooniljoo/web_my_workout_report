import React from "react";
import styled from "styled-components";
import CreateWorkoutItem from "./CreateWorkoutItem";
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

function RoutineHead({ onCreate, workouts }) {
  //const todos = useRoutineState();
  //const undoneTasks = todos.filter(todo => !todo.done);
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <RoutineHeadBlock>
      <h2>
        {dateString}
        <span className="day">{dayName}</span>
      </h2>
      <h2>{workouts.title}</h2>
      <h2>{workouts.desc}</h2>
      {/* <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div> */}
      <CreateWorkoutItem onCreate={onCreate} />
    </RoutineHeadBlock>
  );
}

export default RoutineHead;
