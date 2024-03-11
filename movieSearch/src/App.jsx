import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import Movies from './Movies'

function App() {
  const[searchTerm,setSearchTerm]=useState('')
  const[moviesList,setMoviesList]=useState([])
  useEffect(()=>{
    async function fetchData(){
      const res=await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=abe24a79`)
      const data=await res.json()
      console.log(data)
      setMoviesList(data.Search)
    }
    fetchData()
  },[searchTerm])
const change=(e)=>{
  setSearchTerm(e)
}
  return (
    <div>
      <Movies moviesList={moviesList} searchTerm={searchTerm} change={change}/>
    </div>  
  )
}

export default App
