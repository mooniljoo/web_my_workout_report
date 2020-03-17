import React from "react";
import Set from "../components/Set";
import { useSelector, useDispatch } from "react-redux";
import { onAddSet } from "../modules/sets";

function AddSet() {
  return <div>추가</div>;
}
function SetContainer() {
  const sets = useSelector(state => state);
  console.log(sets);

  const dispatch = useDispatch();
  const onClickAddSet = () => dispatch(onAddSet());
  return (
    <div>
      <AddSet onClick={onClickAddSet} />
      {/* {sets.map((set, index) => {
        <Set key={index} set={set} />;
      })} */}
    </div>
  );
}

export default SetContainer;
