import React from "react";
import RoutineHead from "../components/RoutineHead";
import RoutineItem from "../components/RoutineItem";
import { useSelector,useDispatch } from "react-redux";
import {addRoutine } from "../modules/workouts";

function RoutineContainer() {
  const state = useSelector(state => state);
  const dispatch = useDispatch()

  // const id = Date.now()
  const onAddRoutine = () => dispatch(addRoutine());

  // console.log(state);
  return (
    <div>
      {/* 추후 렌더or로드됐을 때로 변경 */}
      <button onClick={onAddRoutine}>Routine추가</button>
      <RoutineHead workouts={state.workouts} />
      <RoutineItem workouts={state.workouts} />
    </div>
  );
}

export default RoutineContainer;
