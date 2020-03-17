import React from "react";
import WorkoutList from "../components/WorkoutList";

function WorkoutListContainer({ routine }) {
  //workout들
  const workoutItems = routine.workoutItems;

  return <WorkoutList workoutItems={workoutItems} />;
}

export default WorkoutListContainer;
