import { useState } from "react"
import './App.css'
function App()
{
  const[color,setColor]=useState('false');
  return(
    <div className="changer" style={{backgroundColor:color}}>
      <input type="color" onChange={(e) => setColor(e.target.value)} value={color}/>
    </div>
  )
}
export default App