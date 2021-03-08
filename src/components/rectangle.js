import React, { useState } from "react";

const Rectangle = () => {
  const [color, setColor] = useState(false);
  const [text, setText] = useState(false);
  return (
    <>
      <div className={color ? "background-red" : "background-green"}>
        {text ? <h3>Button Clicked</h3> : null}
      </div>
      <button
        className="button"
        onClick={() => {
          setText(true);
          setColor(true);
        }}
      >
        Press
      </button>
    </>
  );
};

export default Rectangle;
