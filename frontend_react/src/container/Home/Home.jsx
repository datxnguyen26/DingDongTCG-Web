import { Slider, Navbar, Product, Footer } from '../index.js'

import React from 'react'

const Home = () => {
  return (
    <div id="home">
        <Navbar homeRef='#home' sveRef='#sve' cfvRef='#cfvRef' weissRef='#weiss' />
        <Product />
        <Footer />
    </div>
  )
}

export default Home