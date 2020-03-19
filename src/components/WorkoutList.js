import React from "react";
import WorkoutItem from "./WorkoutItem";
function WorkoutList({ workoutItems }) {
  return (
    <ul>
      {Object.values(workoutItems).map((workoutItem, index) => (
        <WorkoutItem key={index} workoutItem={workoutItem} />
      ))}
    </ul>
  );
}

export default WorkoutList;
