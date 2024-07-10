import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    console.log("counter incremented");
    setCount(count + 1);
  };
  const decrement = () => {
    console.log("counter decremented");
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>-</button>
    </div>
  );
}

export default Counter;
