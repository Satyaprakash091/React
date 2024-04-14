import React, { useRef } from 'react'
import Child from './Child'

const Parent = () => {
    const childRef=useRef(null)
    const handleClick=()=>
    {
        childRef.current.focus()
    }
  return (
    <div>
      <button onClick={handleClick}>click me</button>
        <Child ref={childRef}/>
    </div>
  )
}

export default Parent
