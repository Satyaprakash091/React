import React from 'react'
import Header from './components/Header'
import Movies from './pages/Movies'
import Footer from './components/Footer'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Movie from './pages/Movie'
const App = () => {
  return (
    <div>
      <Header/>
      <select name="" id="">
        <option value="animation"></option>
        <option value="horror"></option>
        <option value="drama"></option>
      </select>
      <Routes>
        <Route path='/' element={<Movies/>}/>
        <Route path='/movie/:id' Component={Movie}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
