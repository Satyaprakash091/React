import React from 'react'

function Child(props) {
   
  return (
    <div>
      <h1>My name is {props.name}</h1>
      <h1>My age is {props.age}</h1>
    </div>
  )
}

export default Child
