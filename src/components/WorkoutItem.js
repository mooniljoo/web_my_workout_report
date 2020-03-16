import React from "react";
import "./WorkoutItem.scss";
import { MdAdd, MdDelete } from "react-icons/md";
import SetsContainer from "../containers/SetsContainer";
import { onAddSet } from "../modules/sets";

function CountDesc({ count }) {
  return (
    <span>
      <br />
      <span>{count.set}</span>set
      <span>{count.weight}</span>kg
      <span>{count.reps}</span>reps
    </span>
  );
}

function WorkoutItem({ workoutItem, onRemove }) {
  //console.log(workoutItem);
  const onClickRemove = () => {
    onRemove(workoutItem.id);
    console.log("This WorkoutItem Element has deleted.");
  };

  const counts = workoutItem.counts;

  return (
    <>
      <div className="WorkoutItem">
        <div className="WorkoutItemHead">
          <span className="name">
            <b>{workoutItem.name}</b>
          </span>
          <span>&nbsp;/&nbsp;</span>
          <span className="counts">
            {counts.map((count, index) => (
              <CountDesc key={index} count={count} />
            ))}
          </span>
          <span
            role="img"
            aria-label="Delete WorkoutItem"
            className="Button-del"
            onClick={onClickRemove}
          >
            <MdDelete />
          </span>
        </div>
        <div className="WorkoutItemButtonsBlock">
          <div className="Buttons">
            {/* <SetsContainer workoutItem={workoutItem} /> */}
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
