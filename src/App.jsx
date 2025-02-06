import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './hooks/ScrollToTop'
import Navbar from './components/header/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import AboutUs from './pages/About'
import Footer from './components/footer/Footer'
import ProductDetails from './pages/ProductDetails'
import './App.css'

const App = () => {
  return (
    <>
      <Router>
         <ScrollToTop /> 
        <Navbar />


        <div className='mt-16'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:category' element={<Products />} />
            <Route path='/products/product-details/:name' element={<ProductDetails />} />                                               
            <Route path='/services' element={<Services />} />
            <Route path='/about-us' element={<AboutUs />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
