import { useState } from "react";
import './App.css'
function App()
{
  const [c,setCount]=useState(0);
  // function inc()
  // {
  //   setCount(c+1)
  // }
  // function dec()
  // {
  //   setCount(c-1)
  // }
  return(
    <div className="counter">
      <p>Count : {c}</p>
      <div>
        <button onClick={()=>setCount(c+1)}>+</button>
        <button onClick={()=>setCount(c-1)}>-</button>
      </div>
    </div>
  )
}
export default App