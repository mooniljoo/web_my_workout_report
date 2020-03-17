import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import WorkoutList from "../components/WorkoutList";
import { addWorkout, toggleWorkout, removeWorkout } from "../modules/workouts";

function WorkoutListContainer({ workout, id }) {
  const workoutItems = workout;

  const dispatch = useDispatch();

  const onCreate = text => dispatch(addWorkout(text));
  const onToggle = useCallback(id => dispatch(toggleWorkout(id)), [dispatch]); // 최적화를 위해 useCallback 사용
  const onRemove = name => dispatch(removeWorkout(name));

  return (
    <div></div>
    // <WorkoutList
    //   workoutItems={workoutItems}
    //   onCreate={onCreate}
    //   onToggle={onToggle}
    //   onRemove={onRemove}
    // />
  );
}

export default WorkoutListContainer;
