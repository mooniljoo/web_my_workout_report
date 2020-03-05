import React from "react";

function AddWorkout({ title, onAdd, onChange }) {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const hour = d.getHours();
  const min = d.getMinutes();

  //const searchWorkout = useRef();

  //   const [text, setText] = useState("");
  //   const onChange = e => {
  //     setText(e.target.value);
  //     // console.log(e.target.value);
  //   };
  //   const onAdd = () => {
  //     setText("");

  //     onCreate(searchWorkout.current.value);
  //   };
  //   const onCreate = res => {
  //     console.log(res);
  //   };

  //   const [state, dispatch] = useReducer(reducer, initialState);
  //   const { workouts } = state;
  return (
    <>
      <div>
        {year}년{month}월{date}일 {hour}시{min}분
      </div>
      <div>
        <input
          name="title"
          value={title}
          placeholder="input your workout"
          onChange={onChange}
        />
        <span
          role="img"
          aria-label="Button-confirm"
          className="Button-confirm"
          onClick={onAdd}
        >
          ➕
        </span>
      </div>
    </>
  );
}

export default AddWorkout;
