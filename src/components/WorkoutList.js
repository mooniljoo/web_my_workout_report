import React from "react";
import WorkoutItem from "./WorkoutItem";
import styled from "styled-components";
function WorkoutList({ workoutItems }) {
  return (
    <Ul>
      {Object.values(workoutItems).map((workoutItem, index) => (
        <WorkoutItem key={index} workoutItem={workoutItem} />
      ))}
    </Ul>
  );
}

const Ul = styled.ul`
  padding: 0;
`;

export default WorkoutList;
