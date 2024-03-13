import React from 'react'
import './FavQuote.css'
const FavQuote = (props) => {
  return (
    <div className='savedQuotes'>
      <h3 className='savedQuote'>{props.quote}</h3>
      <p><i>{props.author}</i></p>
      <span className='rbtn' onClick={()=>{props.remove(props.index)}}>✕</span>
    </div>
  )
}

export default FavQuote
