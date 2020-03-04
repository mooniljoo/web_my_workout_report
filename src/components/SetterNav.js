import React, { useState } from "react";
import "./SetterNav.scss";

function SetterNav() {
  const [setsCount, setSetsCount] = useState(0);

  const onIncrease = () => {
    setSetsCount(setsCount + 1);
  };
  const onDecrease = () => {
    setSetsCount(setsCount - 1);
  };
  return (
    <>
      <div className="SetterNav">
        <div className="Setter">
          <div className="Button-Count-Up" onClick={onIncrease}>↑</div>
          <div>
            <input type="text" placeholder="Input your Weight" value="1.25" />
          </div>
          <div className="Button-Count-Down" onClick={onDecrease}>↓</div>
        </div>
        <div className="Setter">
          <div className="Button-Count-Up" onClick={onIncrease}>↑</div>
          <div>
            <input type="text" placeholder="Input your Set" value={setsCount<0 ? 0 : setsCount} />
          </div>
          <div className="Button-Count-Down" onClick={onDecrease}>↓</div>
        </div>
      </div>
    </>
  );
}

export default SetterNav;
