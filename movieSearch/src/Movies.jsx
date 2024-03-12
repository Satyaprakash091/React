import React from 'react'
import './Movies.css'
const Movies = ({moviesList,searchTerm,change}) => {
  return (
    <div>
        <div className='moviesList' >
            <h1 className='heading'>Movie Search Application</h1>
            <input placeholder="Search Movies" type="text" onChange={(e)=>change(e.target.value)} value={searchTerm} />
        </div>
       
        <div className='movies'>
        {moviesList && moviesList.map((movie,index)=>(
            <div className='movie' key={index}>
                <img src={movie.Poster} alt={movie.Title}/>
                <a href={`https://www.imdb.com/title/${movie.imdbID}`}><h3>{movie.Title}</h3></a>
                <h4>Released Year : {movie.Year}</h4>
                <h5>Type : {movie.Type}</h5>
                <p>{movie.imdbID}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Movies
