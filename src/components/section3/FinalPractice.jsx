import React, { useState } from "react";
import UseState from "./UseState";

export default function FinalPractice() {
  const [index, setIndex] = useState();

  const handleChangeSelect = (e) => {
    setIndex(e.target.value);
  };

  return (
    <div>
      <h1>Super Converter</h1>

      <select value={index} onChange={handleChangeSelect}>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === "0" ? <UseState /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}

export function KmToMiles() {
  return <h3>KM 2 M</h3>;
}
