import React, { useState } from 'react'
import auth from './firebase'

const SignUp = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const handleSignup=async ()=>
    {
        try{
            await auth.createUserWithEmailAndPassword(email,password)
        }
        catch{
            console.log("error"+err)
        }
    }
  return (
    <div>
      <input type="email" placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br /><br />
      <input type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleSignup}>Submit</button>
    </div>
  )
}

export default SignUp
