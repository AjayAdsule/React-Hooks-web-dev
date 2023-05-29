import React, { useState } from "react";
import Item from "./Item";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(false);

  return (
    <React.Fragment>
      <h1 className="text-center">Window Width</h1>
      <button
        onClick={() => {
          setShow(!show);
          return setMessage(!message);
        }}
      >
        {message ? "hide" : "show"}
      </button>
      {show && <Item />}
    </React.Fragment>
  );
};

export default ShowHide;
