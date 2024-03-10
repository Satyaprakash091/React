import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [data, setData] = useState('');
  const change = () => {
     setData('')
  };
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setData(e.target.value)}
          value={data}
        />
        <button onClick={change}>click</button>
      </div>
      <div>
        <Child value={data}/>
      </div>
    </div>
  );
}

export default Parent;
