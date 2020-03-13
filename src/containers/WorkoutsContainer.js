import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Workouts from "../components/Workouts";
import { addWorkout, toggleWorkout } from "../modules/workouts";

function WorkoutsContainer() {
  const workouts = useSelector(state => state.workouts);
  const dispatch = useDispatch();

  const onCreate = text => dispatch(addWorkout(text));
  const onToggle = useCallback(id => dispatch(toggleWorkout(id)), [dispatch]); // 최적화를 위해 useCallback 사용

  return (
    <Workouts workouts={workouts} onCreate={onCreate} onToggle={onToggle} />
  );
}

export default WorkoutsContainer;
