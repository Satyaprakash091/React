import React from 'react'
import './App.css'
import {Route, Routes } from "react-router-dom";
import NotFound from './pages/NotFound.jsx';
import Header from './pages/Header'
import Home from "./pages/Home.jsx";
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
const App = () => {
  return (
    <div>
      <Header/>
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*"  element={<NotFound/>}></Route>
      </Routes>
    </div>
  )
}

export default App
