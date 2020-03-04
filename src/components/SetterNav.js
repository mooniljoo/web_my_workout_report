import React from "react";
import "./SetterNav.scss";

function SetterNav() {
  return (
    <>
      <div className="SetterNav">
        <div className="Weight-Setter">
          <div className="Button-Count-Up">↑</div>
          <div>
            <input type="text" placeholder="Input your Weight" value="1.25" />
          </div>
          <div className="Button-Count-Down">↓</div>
        </div>
        <div className="Weight-Setter">
          <div className="Button-Count-Up">↑</div>
          <div>
            <input type="text" placeholder="Input your Set" value="1" />
          </div>
          <div className="Button-Count-Down">↓</div>
        </div>
      </div>
    </>
  );
}

export default SetterNav;
