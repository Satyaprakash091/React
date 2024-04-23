import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeCart } from '../Redux/store'


const Cart = () => {
  const cart=useSelector((state)=>state.products.cart)
  const dispatch=useDispatch()
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((item)=>(
          <li key={item.id}>{item.title}
          <button class="inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-200 rounded text-base mt-4 md:mt-0" onClick={()=>dispatch(removeCart(item))}>Delete</button>
          </li>
        ))}
      </ul>
      <h1>Total : {cart.reduce((sum,pro)=>sum+pro.price,0)}</h1>
      <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Checkout
        </button>
    </div>
  )
}

export default Cart
