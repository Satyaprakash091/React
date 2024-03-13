import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import FavQuote from "./FavQuote";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [btnClick, setbtnClick] = useState(0);
  const[saveQuote,setsaveQuote]=useState([]);
  const[saveAuthor,setsaveAuthor]=useState([]);
  useEffect(() => {
    axios.get("https://api.quotable.io/random").then((data) => {
      setQuote(`"${data.data.content}"`);
      setAuthor(data.data.author);
    });
  }, [btnClick]);
  const add=()=>{
    setsaveQuote([...saveQuote,quote])
    setsaveAuthor([...saveAuthor,author])
  }
  const remove=(index)=>{
    saveQuote.splice(index,1)
    saveAuthor.splice(index,1)
    setsaveQuote([...saveQuote])
    setsaveAuthor([...saveAuthor])

  }
  // function updateQuote()
  // {
  //   setInterval(()=>{
  //     setbtnClick(btnClick+1)
  //   },5000)
  // }
  // updateQuote()
  return (
    <>
      <div className="quotation">
        <h1 className="heading"><u>Random Quote Generator</u></h1>
        <blockquote className="quote">{quote}</blockquote>
        <cite className="author">{author}</cite><br/>
        <button className="btn" onClick={() => setbtnClick(btnClick + 1)}>Refresh</button>
        <button className="sbtn" onClick={add}>Save</button>
      </div>
       <div>
       <h1><u>Saved Quotes</u></h1>
        {saveQuote.map((quote,index)=>(
            <FavQuote quote={quote} author={saveAuthor[index]} remove={remove} key={index}/>
        ))} 
       </div>
    </>
  );
}

export default App;
// <div>
          //   <p>{quote}</p>
          //   <h3>{saveAuthor[index]}</h3>  
          // </div>
