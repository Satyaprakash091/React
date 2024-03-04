import React from "react";
import booksData from "../data"
import Book from "./Book"
function Books({type})
{
  return(
    <div>
      <h1 className="heading">{type} Books</h1>
      <div className="books">
        {
          booksData[type].map((book,index)=>
          (
            <Book image={book.image} title={book.name} price={book.price} key={index}/>
          ))
        }
      </div>
    </div>
  )
}
export default Books