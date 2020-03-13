import React, { useState, useCallback, useRef, useMemo } from "react";
import "./App.scss";
import SetterNav from "./components/SetterNav";
import AddWorkout from "./components/AddWorkout";
import WorkoutList from "./components/WorkoutList";

function countActiveWorkout(workouts) {
  console.log("활성사용자수를 세는중..");
  return workouts.filter(workout => workout.active).length;
}
function App() {
  const [inputs, setInputs] = useState({
    title: "",
    desc: ""
  });
  const { title, desc } = inputs;
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs({ ...inputs, [name]: value });
    },
    [inputs]
  );
  const [workouts, setWorkouts] = useState([
    {
      id: 1,
      title: "Biceps Curl",
      desc: "12reps 5sets"
    }
    // {
    //   id: 2,
    //   title: "Triceps Curl",
    //   desc: "12reps 5sets"
    // },
    // {
    //   id: 3,
    //   title: "Bench Press",
    //   desc: "12reps 5sets"
    // }
  ]);
  const nextId = useRef(4);

  const onAdd = useCallback(() => {
    const workout = {
      id: nextId.current,
      title,
      desc
    };
    //setWorkouts([...workouts, workout]);
    setWorkouts(workouts => workouts.concat(workout)); //배열.concat(배열) == 배열 + 배열
    setInputs({
      title: "",
      desc: ""
    });
    console.log(nextId.current);
    nextId.current += 1;
  }, [title, desc]); //des 의 파라미터를 깜빡하고 안넣게 되면 최신상태를 갱신하지 못할 수도 있다.

  const onRemove = useCallback(
    id => {
      setWorkouts(workouts.filter(workout => workout.id !== id));
    },
    [workouts]
  );

  const onToggle = useCallback(
    id => {
      setWorkouts(
        workouts.map(workout =>
          workout.id === id ? { ...workout, active: !workout.active } : workout
        )
      );
    },
    [workouts]
  );

  const count = useMemo(() => countActiveWorkout(workouts), [workouts]); //deps가 바뀔 때만 workouts가 호출이 된다

  return (
    <div className="App">
      <header className="MWR-header">
        <AddWorkout title={title} onChange={onChange} onAdd={onAdd} />
      </header>
      <main className="MWR-wrapper">
        <WorkoutList
          workouts={workouts}
          onRemove={onRemove}
          onToggle={onToggle}
        />
        {/* <Workout title="Biceps Curl" desc="12reps 5sets" />
        <Workout title="Triceps Curl" desc="12reps 5sets" />
        <Workout title="Bench Press" desc="12reps 5sets" /> */}
        <div>활성 사용자 수: {count}</div>
      </main>
      <SetterNav></SetterNav>
    </div>
  );
}

export default App;
