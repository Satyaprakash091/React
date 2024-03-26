import React, { useState } from 'react'
import './App.css'
import Movies from './Movies'

const App = () => {
  const[formOpen,setFormOpen]=useState(false);
  const openForm=()=>
  {
    setFormOpen(true)
  }
  const closeForm=()=>
  {
    setFormOpen(false)
  }
  return (
   <>
   <button className='p-5 bg-neutral-50 text-black hover:bg-blue-300 hover:text-white
   ' onClick={openForm}>Add New</button>
     <div className='p-5 bg-black text-white'>
      <Movies formOpen={formOpen} closeForm={closeForm}/>
    </div>
   </>
  )
}

export default App
