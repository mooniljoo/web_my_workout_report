import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import WorkoutList from "../components/WorkoutList";
import { addWorkout, toggleWorkout, removeWorkout } from "../modules/workouts";

function WorkoutListContainer({ workout }) {
  const workoutItems = workout.id.workoutItems;

  const dispatch = useDispatch();

  const onCreate = text => dispatch(addWorkout(text));
  const onToggle = useCallback(id => dispatch(toggleWorkout(id)), [dispatch]); // 최적화를 위해 useCallback 사용
  const onRemove = id => dispatch(removeWorkout(id));

  return (
    <WorkoutList
      workoutItems={workoutItems}
      onCreate={onCreate}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
}

export default WorkoutListContainer;
