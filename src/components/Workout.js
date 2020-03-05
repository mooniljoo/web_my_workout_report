import React from "react";
import Button from "./Button";
import "./Workout.scss";

function Workout({ workout, index, onToggle, onRemove }) {
  const deleteElem = () => {
    console.log("This Workout Element has deleted.");
  };
  return (
    <>
      <div className="Workout">
        <span className="title">{workout}</span>
        <span>&nbsp;/&nbsp;</span>
        <span className="desc">{workout}</span>
        <span
          role="img"
          aria-label="Delete Workout"
          className="Button-del"
          onClick={deleteElem}
        >
          ❌
        </span>
        <div className="Buttons">
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    </>
  );
}

export default Workout;
