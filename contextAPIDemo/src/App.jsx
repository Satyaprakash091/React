import React, { useState } from "react";
import Component from "./Component";
import { mainContext } from "./main";
import './App.css'
const App = () => {
  const[bgColor,setbgColor]=useState(null)
  return (
    <div className="box" style={{width:'400px',height:'400px',border:'2px solid black'}}>
      <button className="btn" onClick={() => setbgColor(false)}>Light</button>
      <button className="btn" onClick={() => setbgColor(true)}>Dark</button>
      <mainContext.Provider value={bgColor}>
        <Component />
      </mainContext.Provider>
    </div>
  );
};

export default App;
