import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./WorkoutItem.scss";
import { MdAdd, MdDelete } from "react-icons/md";
import SetsContainer from "../containers/SetsContainer";
import { onAddSet } from "../modules/sets";

function WorkoutItem({ workout, sets, onRemove }) {
  const onClickRemove = () => {
    onRemove(workout.id);
    console.log("This WorkoutItem Element has deleted.");
  };

  // const buttons1 = useSelector(state => state.buttons);
  const dispatch = useDispatch();

  const onClickAddSet = () => dispatch(onAddSet());
  const _sets = useSelector(state => state._sets);

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
          <SetsContainer _sets={_sets} />
        </div>
        <div className="addButton" onClick={onClickAddSet}>
          <MdAdd />
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
