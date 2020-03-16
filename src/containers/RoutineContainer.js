import React from "react";
import RoutineHead from "../components/RoutineHead";
import RoutineItem from "../components/RoutineItem";
import { useSelector } from "react-redux";

function RoutineContainer() {
  const workouts = useSelector(state => state.workouts);
  console.log(workouts);
  return (
    <div>
      <RoutineHead workouts={workouts} />
      <RoutineItem workouts={workouts} />
    </div>
  );
}

export default RoutineContainer;
