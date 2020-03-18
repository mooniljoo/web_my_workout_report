import React from "react";
import WorkoutItem from "./WorkoutItem";
function WorkoutList({ workoutItems }) {
  console.log(workoutItems)
  return (
    <ul>
      {workoutItems.map((workoutItem, index) => (
        <WorkoutItem key={index} workoutItem={workoutItem} />
      ))}
    </ul>
  );
}

export default WorkoutList;
