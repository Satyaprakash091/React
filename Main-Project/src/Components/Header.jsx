import React from "react";
import { useSelector } from "react-redux";
import {Link,useNavigate} from 'react-router-dom'

const Header = () => {
  const navigate=useNavigate()
  const cart=useSelector((state) => state.products.cart)
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
         
          <span className="ml-3 text-xl">MyCart</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to='/' className="mr-5 hover:text-gray-900">Home</Link>
          <Link to='/about' className="mr-5 hover:text-gray-900">About</Link>
          <Link to='/products' className="mr-5 hover:text-gray-900">Products</Link>
          <Link to='/contact' className="mr-5 hover:text-gray-900">Contact</Link>
          <Link to='/cart'>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">
          Cart : {cart.length}
        </button>
        </Link>
        <Link to='/signup'>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">
          Sign Up
        </button>
        </Link>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0" onClick={()=>navigate('/login')}>
          Login
        </button>
        </nav>
        
      </div>
    </header>
  );
};

export default Header;
