import React, { useEffect, useState } from "react";

function Hello() {
  const byeFn = () => {
    console.log("bye:");
  };

  const hiFn = () => {
    console.log("created:");
    return byeFn;
  };
  useEffect(hiFn, []);

  return <h1>Hello</h1>;
}

export default function Button() {
  const [showing, setShowing] = useState(false);

  const onClick = () => {
    setShowing((prev) => !prev);
  };

  return (
    <div>
      {showing && <Hello />}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}
