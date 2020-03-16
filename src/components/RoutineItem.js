import React from "react";
import CounterContainer from "../containers/CounterContainer";
import WorkoutListContainer from "../containers/WorkoutListContainer";
import styled from "styled-components";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
function RoutineItem({ workouts }) {
  return (
    <TodoListBlock>
      {workouts.map((workout, index) => (
        <WorkoutListContainer key={index} workout={workout} />
      ))}
      <CounterContainer />
    </TodoListBlock>
  );
}

export default RoutineItem;
