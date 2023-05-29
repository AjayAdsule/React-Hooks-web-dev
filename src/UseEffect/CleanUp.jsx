import React from "react";
import { useState, useEffect } from "react";

const CleanUp = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const checkSize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    console.log("useEffect is call");
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
      console.log("cleanup");
    };
  });
  return (
    <React.Fragment>
      <h1 className="text-center">{width}</h1>
    </React.Fragment>
  );
};

export default CleanUp;
