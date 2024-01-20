import "./counter.css";
import React, { useState } from "react";

const Counter = () => {
  const [displaycounter, setDisplayCounter] = useState(0); //se define y pone a cero el contador
  return (
    <div className="counterAPP">
      <div className="LCDScreen">{displaycounter}</div>{" "}
      {/* se muestra el contador en el area designada */}
      <div
        className="buttonplus"
        onClick={() => setDisplayCounter((displaycounter) => displaycounter + 1)}
      ></div>{" "}
      {/* se le aumenta 1 al dar click sobre el DIV */}
      <div
        className="buttonsubtract"
        onClick={() => setDisplayCounter((displaycounter) => displaycounter - 1)}
      ></div>{" "}
      {/* se resta 1 al dar click sobre el DIV */}
      <div
        className="buttonzero"
        onClick={() => setDisplayCounter((displaycounter) => 0)}
      >
        00
      </div>
      {/* se pone el valora cero al dar click sobre el DIV */}
    </div>
  );
};

export default Counter;
