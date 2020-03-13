import React from "react";
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";

function Counter({
  number,
  diff,
  unit,
  onIncrease,
  onDecrease,
  onSetNumber,
  onSetDiff
}) {
  const onChangeNumber = e => {
    onSetNumber(parseFloat(e.target.value, 10));
  };

  const onChangeDiff = e => {
    onSetDiff(parseFloat(e.target.value, 10));
  };
  return (
    <div className="Setter">
      <h3>
        설정 값
        <input
          type="number"
          placeholder="Input your Weight"
          value={diff}
          min="1"
          onChange={onChangeDiff}
        />
        <span className="unit">{unit}</span>
      </h3>
      <div className="Button-Count-Up" onClick={onIncrease}>
        <MdArrowUpward />
      </div>
      <div>
        <input
          type="number"
          placeholder="Input your Weight"
          value={number}
          min="1"
          onChange={onChangeNumber}
        />
        <span className="unit">{unit}</span>
      </div>
      <div className="Button-Count-Down" onClick={onDecrease}>
        <MdArrowDownward />
      </div>
    </div>
  );
}

export default Counter;
