import React from "react";
import Set from "./Set";
import { useSelector } from "react-redux";

function SetList({ workoutItem }) {
  //workoutItems의 운동항목 동적으로 바꿀 것

  // const sets = useSelector(
  //   state => state.routines.routine.workoutItems.squat.sets
  // );
  // console.log(workoutItem.name);
  const sets = workoutItem.sets;
  return (
    <>
      {Object.values(sets).map((set, index) => (
        <Set key={index} set={set} />
      ))}
    </>
  );
}

export default SetList;
