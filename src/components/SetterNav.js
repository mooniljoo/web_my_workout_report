import React, { useState } from "react";
import "./SetterNav.scss";

function SetterNav() {
  const [setsCount, setSetsCount] = useState(0);
  const [weightNumber, setWeightNumber] = useState(1.25);

  const onIncreaseSets = () => {
    setSetsCount(prevCount => prevCount + 1);
  };
  const onDecreaseSets = () => {
    setSetsCount(prevCount => prevCount - 1);
  };

  const onIncreaseWeight = () => {
    setWeightNumber(prevCount => prevCount + 1.25);
  };
  const onDecreaseWeight = () => {
    setWeightNumber(prevCount => prevCount - 1.25);
  };
  return (
    <>
      <div className="SetterNav">
        <div className="Setter">
          <div className="Button-Count-Up" onClick={onIncreaseWeight}>
            ↑
          </div>
          <div>
            <input
              type="tel"
              placeholder="Input your Weight"
              value={weightNumber}
            />
            <span className="unit">kg</span>
          </div>
          <div className="Button-Count-Down" onClick={onDecreaseWeight}>
            ↓
          </div>
        </div>
        <div className="Setter">
          <div className="Button-Count-Up" onClick={onIncreaseSets}>
            ↑
          </div>
          <div>
            <input type="tel" placeholder="Input your Set" value={setsCount} />
            <span className="unit">sets</span>
          </div>
          <div className="Button-Count-Down" onClick={onDecreaseSets}>
            ↓
          </div>
        </div>
      </div>
    </>
  );
}

export default SetterNav;
