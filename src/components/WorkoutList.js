import React from "react";
import WorkoutItem from "./WorkoutItem";
function WorkoutList({ workouts, onToggle, onRemove }) {
  return (
    <ul>
      {workouts.map(workout => (
        <WorkoutItem
          key={workout.id}
          id={workout.id}
          workout={workout}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default React.memo(WorkoutList);
