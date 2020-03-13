import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./WorkoutItem.scss";
import { MdAdd, MdDelete } from "react-icons/md";
import Button from "./Button";

function WorkoutItem({ workout, buttons, onRemove }) {
  const onClickRemove = () => {
    onRemove(workout.id);
    console.log("This WorkoutItem Element has deleted.");
  };

  const buttons1 = useSelector(state => state.buttons);
  const dispatch = useDispatch();

  //const onClickAddReps = text => dispatch(onAddReps());

  return (
    <>
      <div className="WorkoutItem">
        <span className="title">{workout.text}</span>
        <span>&nbsp;/&nbsp;</span>
        <span className="desc">{workout.text}</span>
        <span
          role="img"
          aria-label="Delete WorkoutItem"
          className="Button-del"
          onClick={onClickRemove}
        >
          <MdDelete />
        </span>
        <div className="Buttons">
          {buttons1.map(button => (
            <Button
              key={workout.id}
              id={workout.id}
              // onToggle={onToggle}
              //onRemove={onRemove}
            />
          ))}
          <div className="addButton" onClick="onClickAddReps">
            <MdAdd />
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(WorkoutItem);

// const WorkoutItem = React.memo(function WorkoutItem({ workout, onToggle }) {
//   return (
//     <li
//       style={{ textDecoration: workout.done ? "line-through" : "none" }}
//       onClick={() => onToggle(workout.id)}
//     >
//       {workout.text}
//     </li>
//   );
// });
