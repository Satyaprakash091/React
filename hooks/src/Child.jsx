import React from 'react'

const Child = (props) => {
   function display()
   {
    console.log("child called");
   }
   display()
  return (
    <div>
      {props.children}
    </div>
  )
}

export default React.memo(Child)
