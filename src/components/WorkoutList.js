import React from "react";
import WorkoutItem from "./WorkoutItem";
function WorkoutList({ workoutItems, onToggle, onRemove }) {
  return (
    <ul>
      {Object.values(workoutItems).map((workoutItem, index) => (
        <WorkoutItem
          key={index}
          workoutItem={workoutItem}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default React.memo(WorkoutList);
