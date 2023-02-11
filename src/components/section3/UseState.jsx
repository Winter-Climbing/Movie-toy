import React, { useCallback, useState } from "react";

export default function UseState() {
  const [amount, setAmount] = useState();
  const [invert, setInvert] = useState(false);

  const handleChangeInput = useCallback((e) => {
    setAmount(e.target.value);
  });

  const reset = () => {
    setAmount(0);
  };

  const onFlip = () => {
    reset();
    setInvert(!invert);
  };
  return (
    <>
      <h1></h1>
      <label i htmlFor="minutes">
        Minutes:
      </label>
      <input
        id="minutes"
        type="number"
        placeholder="Minutes"
        value={invert ? amount * 60 : amount}
        onChange={handleChangeInput}
        disabled={invert}
      />
      <label htmlFor="hours">Hours:</label>
      <input
        id="hours"
        type="number"
        placeholder="Hours"
        value={invert ? amount : Math.round(amount / 60)}
        disabled={!invert}
      />
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>{invert ? "turn back" : "flip"}</button>
    </>
  );
}
