import React, { useState } from "react";

// 컴포넌트 최적화를 위하여 React.memo를 사용합니다
const WorkoutItem = React.memo(function WorkoutItem({ workout, onToggle }) {
  return (
    <li
      style={{ textDecoration: workout.done ? "line-through" : "none" }}
      onClick={() => onToggle(workout.id)}
    >
      {workout.text}
    </li>
  );
});

// 컴포넌트 최적화를 위하여 React.memo를 사용합니다
const WorkoutList = React.memo(function WorkoutList({ workouts, onToggle }) {
  return (
    <ul>
      {workouts.map(workout => (
        <WorkoutItem key={workout.id} workout={workout} onToggle={onToggle} />
      ))}
    </ul>
  );
});

function Workouts({ workouts, onCreate, onToggle }) {
  // 리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리해야하는 것은 아닙니다.
  const [text, setText] = useState("");
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onCreate(text);
    setText(""); // 인풋 초기화
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder="할 일을 입력하세요.."
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <WorkoutList workouts={workouts} onToggle={onToggle} />
    </div>
  );
}

export default React.memo(Workouts);
