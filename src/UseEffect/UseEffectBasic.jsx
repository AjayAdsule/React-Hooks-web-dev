import React from "react";
import { useState, useEffect } from "react";

const UseEffectBasic = () => {
  const [value, setValue] = useState(0);
  const [text, setText] = useState(5);
  useEffect(() => {
    console.log("useEffect");
    document.title = `new message ${value} ${text}`;
  }, [value]);
  return (
    <React.Fragment>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>click</button>
      <h2>{text}</h2>
      <button onClick={() => setText(text - 1)}>click</button>
    </React.Fragment>
  );
};

export default UseEffectBasic;
