import React from "react";
import Set from "./Set";

function SetList({ workoutItem }) {
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
