import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AiOutlineShoppingCart } from "react-icons/ai";

import './Navbar.scss';

const Navbar = () => {

const [toggle, setToggle] = useState(false);
return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt="Store logo" />
        </div>
        <ul className='app__navbar-links'>
            <li className='app__flex p-text'><div></div><a href="#home">Home</a></li>
            <li className='app__flex p-text'><div /><a href="#sve">SVE Products</a></li>
            <li className='app__flex p-text'><div /><a href="#cfv">CFV Products</a></li>
            <li className='app__flex p-text'><div /><a href="#weiss">Weiss Products</a></li>
        </ul>
        <AiOutlineShoppingCart size={60} />
        <div className="app__navbar-menu">
            <HiMenuAlt4 onClick={() => setToggle(true)} />
            
            {toggle && (
            <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
            >
                <HiX onClick={() => setToggle(false)} />
                <img class='center' src={images.logo} alt="Store logo" width={180} height={180}/>
                <ul className='app__navbar-links'>
                    <li className='app__flex p-text'><a href="#home">Home</a></li>
                    <li className='app__flex p-text'><a href="#sve">SVE Products</a></li>
                    <li className='app__flex p-text'><a href="#cfv">CFV Products</a></li>
                    <li className='app__flex p-text'><a href="#weiss">Weiss Schwarz Products</a></li>
                </ul>
            </motion.div>
            )}
        </div>
    </nav>
    
  )
}

export default Navbar