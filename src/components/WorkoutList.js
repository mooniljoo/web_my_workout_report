import React, { useEffect } from "react";
// import Workout from "./Workout";

const Workout = React.memo(function Workout({ workout, onRemove, onToggle }) {
  const { title, desc, id, active } = workout;
  useEffect(() => {
    console.log("workout 값이 설정됨");
    console.log(workout);
    // return 에 함수를 넣어주면 cleaner 함수 ->  workout가 바뀔때도 사라질때도 그 직전에 호출
    return () => {
      console.log("workout 값이 바뀌기 전");
      console.log(workout);
    };
  }, [workout]); //deps 값이 바뀔때 마다 호출
  return (
    <div>
      <b
        style={{
          color: active ? "tan" : "dimgray",
          cursor: "pointer"
        }}
        onClick={() => onToggle(id)}
      >
        {title}
      </b>
      &nbsp;
      <span>({desc})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
});
function WorkoutList({ workouts, onRemove, onToggle }) {
  return (
    <div>
      {workouts.map((workout, index) => (
        <Workout
          workout={workout}
          key={index}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(WorkoutList);
