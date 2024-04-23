import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Header from './Components/Header'
import ProductsList from './Pages/ProductsList'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import NoPage from './Pages/NoPage'
import Login from './Pages/Login'
import SignUp from './Pages/Signup'
import Dashboard from './Pages/Dashboard'

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/'Component={Home}/>
        <Route path='/products' Component={ProductsList}/>
        <Route path='/product/:id' Component={ProductDetails}/>
        <Route path='/cart' Component={Cart}/>
        <Route path='login' Component={Login}/>
        <Route path='signup' Component={SignUp}/>
        <Route path='dashboard' Component={Dashboard}/>
        <Route path='*' Component={NoPage}/>
      </Routes> 
      <Footer/>
    </>
  )
}

export default App
