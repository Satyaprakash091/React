import React, { useState } from "react";
import Component from "./Component";
import { mainContext } from "./main";
import './App.css'
const App = () => {
  const[bgColor,setbgColor]=useState("white")
  const[textColor,settextColor]=useState("black")
  return (
    <div className="box" style={{width:'400px',height:'400px',border:'2px solid black'}}>
      {/* <button className="btn" onClick={() => {setbgColor("white"),settextColor("black")}}>Light</button> */}
      <button className="btn" onClick={() =>{setbgColor("black"),settextColor("white")}}>Dark</button>
      <mainContext.Provider value={{bgColor,textColor}}>
        <Component />
      </mainContext.Provider>
    </div>
  );
};

export default App;
