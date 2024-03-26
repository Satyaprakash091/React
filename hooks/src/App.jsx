import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import Child from './Child'

const App = () => {
  const[count,setCount]=useState(0)
  const[count2,setCount2]=useState(0)
  const[data,setData]=useState([])
  const[fact,setFact]=useState(1)
  const inputRef=useRef()
  const[searchTerm,setSearchTerm]=useState('titanic')
  const fetchData=async ()=>
  {
    const res=await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=abe24a79`)
    const data=await res.json()
    console.log(data)
    setData(data.Search)
  }
  useLayoutEffect(()=>
  {
     fetchData()
  },[])

  // useEffect(()=>{
  //   const timeout=setTimeout(fetchData(),5000);
  //   return ()=>
  //   {
  //     clearTimeout(timeout)
  //   }
  // },[searchTerm]
  // )
  
  const handleCount=()=>
  {
    setCount((prevCount)=>prevCount+1)
    setCount((prev)=>prev+1)
  }
  const factorial=()=>
  {
      console.log(count2)
      let f=1;
      for(let i=1;i<=count2;i++)
      {
        f=f*i
      }
      setFact(f)
  }
  useMemo(()=>factorial(),[count2])
    return (
    <div>
      <p>Count : {count}</p>
      <p>Count2 : {count2}</p>
      <button onClick={handleCount}>Button1</button>
      <button onClick={()=>setCount2((prev)=>prev+2)}>Button2</button>
      <Child>Hi</Child> 
      <input type="text" ref={inputRef}/>
      <button onClick={()=>setCount2(inputRef.current.value)}>click</button>
      <p>{fact}</p>
      <input type="text" onChange={(e)=>setSearchTerm(e.target.value)}/>
      {data && data.map((t,i)=>(
        <p key={i}>{t.Title}</p>
      ))}
    </div>
  )
}

export default App
