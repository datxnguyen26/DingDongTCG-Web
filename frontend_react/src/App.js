import React from 'react'
import { Slider, Navbar, Product, Footer, ProductDetail, Home } from './container/index'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'; 

const App = () => {
  return (
    <div className="app">
      
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:slug' element={<ProductDetail />}/>
      </Routes>
      </BrowserRouter>
  
    </div>
  )
}

export default App 