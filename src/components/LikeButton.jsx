import React from "react";
import { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <button className="like" onClick={increment}>
      {count} Likes
    </button>
  );
}

export default LikeButton;
