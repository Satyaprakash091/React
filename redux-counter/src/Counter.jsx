import React from 'react'
import { increment,decrement } from './actions'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
const Counter = () => {
    const count=useSelector((state)=>state.count)
    const dispatch=useDispatch()
  return (
    <div>
       <p>Count :{count}</p>
       <button onClick={()=>dispatch(increment())}>+</button>
       <button onClick={()=>dispatch(decrement())}>-</button> 
    </div>
  )
}

export default Counter
