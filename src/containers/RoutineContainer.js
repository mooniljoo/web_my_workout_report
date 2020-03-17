import React from "react";
import RoutineHead from "../components/RoutineHead";
import RoutineItem from "../components/RoutineItem";
import { useSelector, useDispatch } from "react-redux";
import { addRoutine } from "../modules/workouts";

function RoutineContainer() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  //■■■■■■루틴 ID 설정
  const today = new Date();
  const dateString = today
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })
    .replace(/(\s*)/g, "");
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  const id = dateString;
  const onAddRoutine = e => dispatch(addRoutine(dateString));

  // console.log(state);
  return (
    <div>
      {/* 추후 렌더or로드됐을 때로 변경 */}
      <button onClick={onAddRoutine}>
        Routine추가
        <br />
        ID:{id}
      </button>
      <RoutineHead id={id} workouts={state.workouts} />
      <RoutineItem id={id} workouts={state.workouts} />
    </div>
  );
}

export default RoutineContainer;
