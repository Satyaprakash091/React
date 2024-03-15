import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [formDetails,setformDetails]=useState({
    username:"",
    email:"",
    password:""
  })
  const[formErrors,setformErrors]=useState({
    username:"",
    email:"",
    password:""
  })
  const change=(e)=>
  {
    const{name,value}=e.target
    setformDetails({...formDetails,[name]:value})
  }
  const submit=(e)=>{
    e.preventDefault()
    if(formDetails.password.length<6){
        setformErrors({...formErrors,password:"please enter minimum 6 characters"})
    }
    console.log(formDetails)
  }
  return (
    <div>
      <h1>Contact Form</h1>
      <form action="" className="myForm" onSubmit={submit}>
        <input type="text" name="username" id="un" placeholder="Enter the name" onChange={change}/><br /><br />
        {formErrors.username && <p className="error">{formErrors.username}</p>}
        <input type="email" name="email" id="em" placeholder="Enter the email" onChange={change}/><br /><br />
        {formErrors.email && <p className="error">{formErrors.email}</p>}
        <input type="password" name="password" id="pwd" placeholder="Enter the password" onChange={change}/><br /><br />
        {formErrors.password && <p className="error">{formErrors.password}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
