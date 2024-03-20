import React, { useRef } from 'react'

const Contact = () => {
    const usernameRef=useRef('')
    const emailRef=useRef('')
    const messageRef=useRef('')
    const handleSubmit=(e)=>
    {
        e.preventDefault()
        console.log(usernameRef.current.value)
    }
  return (
    <div className='container p-5'>
      <form action="" className='form' onSubmit={handleSubmit}>
        <div className='form-floating'>
            <input type="text" id='name' className="form-control"  placeholder='Enter your name' ref={usernameRef}/><br />
            <label htmlFor="name" className="form-label">Enter your name</label>
        </div>
            <div className='form-floating'>
            <input type="email" id="email" className="form-control" placeholder='Enter your email' ref={emailRef}/><br />
        <label htmlFor="email" className="form-label">Enter your email</label>
        </div>
        <div className='form-floating'>
            <textarea name="" id="msg" cols="30" rows="10" className="form-control" placeholder='Enter the message' ref={messageRef}></textarea>
            <label htmlFor="msg" className="form-label">Enter the message</label><br />
        </div>
        <button className="btn btn-primary">
            Contact
        </button>
      </form>
    </div>
  )
}

export default Contact
