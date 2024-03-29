import { useState } from "react"
import './App.css'
function App()
{
  const[count,setCount]=useState(0);
  function inc()
  {
    if(count<25)
    {
      setCount(count+1);
    }
    else{
      window.alert("Counter value should not be more than 25");
    }
  }
  function dec()
  {
    if(count>0)
    {
      setCount(count-1);
    }
    else{
      window.alert("Counter value should not be less than 0");
    }
  }
  return(
    <div className="counter">
      <p>Count : {count}</p>
      <div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <button onClick={()=>setCount(0)}>Reset</button>
      </div>
    </div>
  )
}
export default App