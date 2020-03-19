import React, { useState } from "react";
import "./WorkoutItem.scss";
import { useDispatch } from "react-redux";
import { MdAdd, MdDelete } from "react-icons/md";
import SetListContainer from "../containers/SetListContainer";
import { removeWorkout, addSet } from "../modules/routines";

function SetDesc({ set }) {
  return (
    <span>
      <br />
      <span>{set.set}</span>set
      <span>{set.weight}</span>kg
      <span>{set.reps}</span>reps
    </span>
  );
}

function WorkoutItem({ workoutItem }) {
  const [nextSet, setNextSet] = useState(1);
  const workoutItemName = workoutItem.name;
  const sets = workoutItem.sets;

  //모듈로 액션 보내기
  const dispatch = useDispatch();

  const onRemoveWorkout = workoutItemNameText =>
    dispatch(removeWorkout(workoutItemNameText));
  const onAddSet = (workoutItemNameText, nextSet) =>
    dispatch(addSet(workoutItemNameText, nextSet));

  const clickRemoveWorkout = () => {
    console.log(workoutItemName.toString());
    //workoutItems의 운동항목 동적으로 바꿀 것
    onRemoveWorkout(workoutItemName.toString());
  };
  const clickAddSet = () => {
    console.log(workoutItemName.toString());
    //workoutItems의 운동항목 동적으로 바꿀 것
    setNextSet(nextSet + 1);
    onAddSet(workoutItemName.toString(), nextSet);
    console.log(workoutItemName.toString());
    console.log(nextSet);
  };

  return (
    <>
      <div className="WorkoutItem">
        <div className="WorkoutItemHead">
          <span className="name">
            <b>{workoutItemName}</b>
          </span>
          <span
            role="img"
            aria-label="Delete WorkoutItem"
            className="Button-del"
            onClick={clickRemoveWorkout}
          >
            <MdDelete />
          </span>
          <span className="sets">
            {Object.values(sets).map((set, index) => (
              <SetDesc key={index} set={set} />
            ))}
          </span>
        </div>
        <div className="WorkoutItemButtonsBlock">
          <div className="Buttons">
            <SetListContainer sets={sets} workoutItem={workoutItem} />
          </div>
          <div className="addButton" onClick={clickAddSet}>
            <MdAdd />
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(WorkoutItem);
