import React from "react";
import CounterContainer from "../containers/CounterContainer";
import WorkoutListContainer from "../containers/WorkoutListContainer";
import styled from "styled-components";

function RoutineBody({ routine }) {
  return (
    <WorkoutListBlock>
      <WorkoutListContainer routine={routine} />
      <CounterContainer />
    </WorkoutListBlock>
  );
}

const WorkoutListBlock = styled.div`
  flex: 1;
  padding-bottom: 48px;
  overflow-y: auto;
`;
export default RoutineBody;
