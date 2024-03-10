import React, { useState } from 'react'
import AccordionItem from './AccordionItem'
const Accordion = (props) => {
    const [openIndex,setOpenIndex]=useState(0)
    const update=(index)=>
    {
        setOpenIndex(index)
    }
  return (
    <div>
        {props.items.map((obj,index)=>
        (
            <AccordionItem key={index} title={obj.title} content={obj.content} isOpen={openIndex===index} update={update} index={index}/>
        ))}
    </div>
  )
}

export default Accordion
