import React from "react";
import Button from "./Button";
import "./WorkoutItem.scss";

function WorkoutItem({ workout, index, onToggle, onRemove }) {
  const deleteElem = () => {
    console.log("This WorkoutItem Element has deleted.");
  };
  return (
    <>
      <div className="WorkoutItem">
        <span className="title">{workout}</span>
        <span>&nbsp;/&nbsp;</span>
        <span className="desc">{workout}</span>
        <span
          role="img"
          aria-label="Delete WorkoutItem"
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

export default WorkoutItem;
