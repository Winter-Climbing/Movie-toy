import React from "react";

export default function Btn({ text, fontSize }) {
  console.log(text);

  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
        fontSize: fontSize,
      }}
    >
      {text}
    </button>
  );
}
