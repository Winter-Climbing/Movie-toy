## React.memo

```javascript
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
      // 이렇게 memo로 감쌀 경우 Props컴포넌트가 호출되어도 변경된 컴포넌트만
      리렌더링된다.
      <MemorizedBtn text={value} changeValue={changeValue} />
      <MemorizedBtn text="Continue" />
    </div>
  );
}
```

<hr>
<br>

## Prop Types

- Prop Types로 Prop으로 보내는 친구들의 타입을 검사할 수 있다.
- CDN으로 다운 받을 수 있음 (뭐 다른 방법도 있겠지만 TS가 있는데 굳이?)
