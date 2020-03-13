import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdAddBox } from "react-icons/md";
import WorkoutList from "./WorkoutList";

function Workouts({ workouts, onCreate, onToggle, onRemove }) {
  const [text, setText] = useState("");
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onCreate(text);
    setText(""); // 인풋 초기화
  };

  // const buttons1 = useSelector(state => state.buttons);
  // const dispatch = useDispatch();

  //   const initialState = {
  //     keyword: { text },
  //     WorkoutData: [
  //       {
  //         name: "Biceps Curl"
  //       },
  //       {
  //         name: "Triceps Curl"
  //       }
  //     ]
  //   };

  //   const mapToComponents = data => {
  //     data.sort();
  //     data = data.filter(concat => {
  //       return (
  //         concat.name.toLowerCase().indexOf(initialState.keyword.toLowerCase()) >
  //         -1
  //       );
  //     });
  //     return data.map((contact, i) => {
  //       return <WorkoutInfo workout={workout} key={i} />;
  //     });
  //   };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder="Input your workout"
          onChange={onChange}
          required
        />
        <button type="submit">
          <MdAddBox />
        </button>
      </form>
      <WorkoutList
        workouts={workouts}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    </div>
  );
}

export default React.memo(Workouts);
