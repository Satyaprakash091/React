import React, { useEffect, useState } from 'react'

const App = () => {
  const[count,setCount]=useState(0)
  const[count2,setCount2]=useState(0)
  useEffect(()=>
    console.log("useEffect")
    ,[count2]
  )
  const handleCount=()=>
  {
    setCount((prevCount)=>prevCount+1)
    setCount((prev)=>prev+1)
  }
    return (
    <div>
      <p>Count : {count}</p>
      <p>Count2 : {count2}</p>
      <button onClick={handleCount}>Button1</button>
      <button onClick={()=>setCount2((prev)=>prev+2)}>Button2</button>
    </div>
  )
}

export default App
