import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products,setProducts]=useState([])
  const[count,setCount]=useState(0);
 useEffect(() =>
  {
   fetch("https://fakestoreapi.com/products")
     .then((res) => res.json())
     .then((data) => setProducts(data))
     .catch((err)=>console.assert.log("my error"+err))
  },[])
  return (
		<div>
			<div className='header'>
				<h2>My Shopping Application</h2>
				<h4 className='count'>Items : {count}</h4>
			</div>
			<h1><u> Accessories</u></h1>
			<div className='items'>
				{products.map((pr, index) => (
					<div className='item'
						key={index}>
						<img
							src={pr.image}
							alt={pr.title}
							height='100'
							width='100'
						/>
						<h2 className='title'>{pr.title}</h2>
						<button className='btn' onClick={()=>setCount(count+1)}>Add To Cart</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default App
