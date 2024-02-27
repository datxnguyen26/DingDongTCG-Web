import React from 'react'
import { Slider, Navbar, Product, Footer } from './container/index'
import './App.scss'; 

const App = () => {
  return (
    <div className="app">
      
      <Navbar />
      <Product />
      <Footer />
  
    </div>
  )
}

export default App 