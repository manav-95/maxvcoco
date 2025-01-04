import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './hooks/ScrollToTop'
import Navbar from './components/header/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import AboutUs from './pages/About'
import './App.css'

const App = () => {
  return (
    <>
      <Router>
         <ScrollToTop /> 
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <div className='mt-16'>
          <Routes>
            <Route path='/products' element={<Products />} />
            <Route path='/services' element={<Services />} />
            <Route path='/about-us' element={<AboutUs />} />
          </Routes>
        </div>

      </Router>
    </>
  )
}

export default App
