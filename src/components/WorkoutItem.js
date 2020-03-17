import React from "react";
import "./WorkoutItem.scss";
import { MdAdd, MdDelete } from "react-icons/md";
import SetListContainer from "../containers/SetListContainer";
import { onAddSet } from "../modules/sets";

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
  const workoutItemName = workoutItem.workoutItemName;
  const sets = workoutItem.sets;

  return (
    <>
      <div className="WorkoutItem">
        <div className="WorkoutItemHead">
          <span className="name">
            <b>{workoutItemName}</b>
          </span>
          <span>&nbsp;/&nbsp;</span>
          <span className="sets">
            {sets.map((set, index) => (
              <SetDesc key={index} set={set} />
            ))}
          </span>
          <span
            role="img"
            aria-label="Delete WorkoutItem"
            className="Button-del"
          >
            <MdDelete />
          </span>
        </div>
        <div className="WorkoutItemButtonsBlock">
          <div className="Buttons">
            <SetListContainer sets={sets} />
          </div>
          <div className="addButton">
            <MdAdd />
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(WorkoutItem);
