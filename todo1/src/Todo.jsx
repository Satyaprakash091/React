import React from 'react'

function Todo(props) {
  return (
    <div>
      <li key={props.index}>{props.task}
            <button onClick={()=>props.fun(props.index)}>x</button>
            </li>
    </div>
  )
}

export default Todo
