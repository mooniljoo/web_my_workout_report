import React from "react";
import CounterContainer from "../containers/CounterContainer";
import WorkoutListContainer from "../containers/WorkoutListContainer";
import styled from "styled-components";

const TodoListBlock = styled.div`
  flex: 1;
  padding-bottom: 48px;
  overflow-y: auto;
`;
function RoutineItem({ workouts, id }) {
  return (
    <TodoListBlock>
      {Object.values(workouts).map((workout, index) => (
        <WorkoutListContainer id={id} key={index} workout={workout} />
      ))}
      <CounterContainer />
    </TodoListBlock>
  );
}

export default RoutineItem;
