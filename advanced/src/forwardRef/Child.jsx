import React,{forwardRef, useRef} from 'react'

const Child = forwardRef((props,ref) => {
  const inputRef=useRef(null)
  ref.current=inputRef.current;
    return (
    <div>
      <input type="text" ref={inputRef}/>
    </div>
  )
}
)

export default Child
