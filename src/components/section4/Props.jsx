import React, { useState } from "react";
import Btn from "./SaveBtn";

const MemorizedBtn = React.memo(Btn);

export default function Props() {
  const [value, setValue] = useState("Save Change");

  const changeValue = (e) => {
    console.log(e);
  };

  return (
    <div>
      <MemorizedBtn text="Save Changes" fontSize={18} />
      <MemorizedBtn text={14} />
    </div>
  );
}
