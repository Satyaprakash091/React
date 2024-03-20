import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const Movie = () => {
 const {id}=useParams()
 const [movieData,setMovieData]=useState({})
 useEffect(()=>
 {
  axios.get(`https://www.omdbapi.com/?i=${id}&apikey=abe24a79`)
  .then((res)=>setMovieData(res.data))
 },[])
 const handleRoute=()=>
 {
  window.location.href=`https://www.imdb.com/title/${id}`
 }
  return (
    <div>
      {movieData &&(
        <div className='movieData row p-5 m-5'>
          <div className="col-4 col-md-6 col-sm-12 col-xs-12">
           <img src={movieData.Poster} alt={movieData.Title} />
          </div>
          <div className="col-8 col-md-6 col-sm-12 col-xs-12">
            <h2>{movieData.Title}</h2>
            <p>Year : {movieData.Year}</p>
            <p>Story : {movieData.Plot}</p>
            <button onClick={handleRoute}>IMDB Link</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Movie
