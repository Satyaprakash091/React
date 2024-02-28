import Child from "./Child"

function App()
{
  let names=["satya","rakesh","soumya"]
  let ages=[20,25,30]
  return(
    <div>
      {
        names.map((names,index)=>
        (
          <Child name={names} age={ages[index]} key={index}/>
        ))
      }
    </div>

    // <div>
    //   <Child name={name1} age={age1}/>
    //   <Child name={name2} age={age2}/>
    //   <Child name={name3} age={age3}/>
    // </div>
  )
}
export default App