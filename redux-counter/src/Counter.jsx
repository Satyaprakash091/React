import React from 'react'
import { increment,decrement } from './Redux/actions'
import { add,subtract } from './Redux/actions'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
const Counter = () => {
    const count=useSelector((state)=>state.count)
    const count2=useSelector((state)=>state.count2)
    const dispatch=useDispatch()
  return (
    <div>
       <p>Count : {count}</p>
       <p>Count2 : {count2}</p>
       <button onClick={()=>dispatch(increment())}>+</button>
       <button onClick={()=>dispatch(add())}>add</button>
       <button onClick={()=>dispatch(subtract())}>subtract</button>
       <button onClick={()=>dispatch(decrement())}>-</button> 
    </div>
  )
}

export default Counter
