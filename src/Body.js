import React, { useState } from "react";

const Body = () => {
  const [count, setCount] = useState(0);
  function handlePlus() {
    setCount(count + 1);
  }
  function handleMinus() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <div className="bodyClass">
      <div className="number">{count}</div>
      <button className="buttons minus" onClick={handleMinus}>
        -
      </button>
      <button className="buttons" onClick={reset}>
        Reset
      </button>
      <button className="buttons" onClick={handlePlus}>
        +
      </button>
    </div>
  );
};

export default Body;
