import React, { useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import { ADDTODO } from './Redux/actions'
import {useSelector} from "react-redux"
const App = () => {
  const [todoText,setTodoText]=useState()
  const todos=useSelector((state)=>state.todos)
  const dispatch=useDispatch()
  return (
    <div>
      <h1>TO-DO App</h1>
      <input type="text" onChange={(e)=>setTodoText(e.target.value)}/>
      <button onClick={()=>dispatch(ADDTODO(Math.trunc(Math.random()*1000),todoText))}>Add</button>
      <div>
        {todos && todos.map((todo,index)=>(
          <p key={index}>{todo.id}-{todo.text}</p>
        ))}
      </div>
    </div>
  )
}

export default App
