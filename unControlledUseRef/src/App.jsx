import React,{useRef} from 'react'
import './App.css'
const App = () => {
  const userRef=useRef();
  const emailRef=useRef();
  const passwordRef=useRef();
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(userRef.current.value,emailRef.current.value,passwordRef.current.value)
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="" id="un" ref={userRef}/><br /><br />
        <input type="email" name="" id="em" ref={emailRef}/><br /><br />
        <input type="password" name="" id="pwd" ref={passwordRef} /><br /><br />
        <button type="submit">Submit</button>
      </form>
      
    </div>
  )
}

export default App
