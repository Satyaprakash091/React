import React from 'react'
import './App.css'
import { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchProducts } from './Redux/actions'
const App = () => {
  const dispatch=useDispatch()
  const {loading,products,error}=useSelector(state=>state.proRed)
  useEffect(()=>
  {
    dispatch(fetchProducts)
  },[dispatch]
)
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error:{error}</p>}
      <ul>
        {products.map((pro,index)=>(
          <li key={index }>{pro.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
