import React from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
const App = () => {
  return (
    <div>
      <Header/>   
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/projects" Component={Projects}/>
        <Route path="/contact" Component={Contact}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
