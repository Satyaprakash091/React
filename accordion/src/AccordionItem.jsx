import React from 'react'

const AccordionItem = (props) => {
    const{title,content,isOpen,update,index}=props
  return (
    <div>
      <h2><button onClick={()=>update(index)}>{title} <span>{isOpen?"-":"+"}</span></button></h2>
      {isOpen &&<p>{content}</p>}
    </div>
  )
}

export default AccordionItem
