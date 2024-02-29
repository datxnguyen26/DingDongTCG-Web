import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AiOutlineShoppingCart } from "react-icons/ai";
/*THIS IS A TEST */
import './Navbar.scss';

const Navbar = ({homeRef, sveRef, cfvRef, weissRef}) => {

const [toggle, setToggle] = useState(false);
return (
 
    <nav className='app__navbar'>
        <div className="app__navbar-menu">
            {!toggle && (<HiMenuAlt4 onClick={() => setToggle(true)} />)}
            {toggle && (<HiX onClick={() => setToggle(false)} />)}
            {toggle && (
            <motion.div
                whileInView={{ x: [0, 0] }}
                transition={{ duration: .75, ease: 'easeInOut' }}
            >            
                <ul className='app__navbar-links'>
                    <li className='app__flex p-text'><a onClick={() => setToggle(false)} href='/'>Home</a></li>
                    <li className='app__flex p-text'><a onClick={() => setToggle(false)} href={{sveRef}}>SVE Products</a></li>
                    <li className='app__flex p-text'><a onClick={() => setToggle(false)} href="#cfv">CFV Products</a></li>
                    <li className='app__flex p-text'><a onClick={() => setToggle(false)} href="#weiss">Weiss Schwarz Products</a></li>
                </ul>
            </motion.div>
            )}
        </div>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt="Store logo" />
        </div>
        <ul className='app__navbar-links'>
            <li className='app__flex p-text'><div></div><a href={homeRef}>Home</a></li>
            <li className='app__flex p-text'><div /><a href={sveRef}>SVE Products</a></li>
            <li className='app__flex p-text'><div /><a href={cfvRef}>CFV Products</a></li>
            <li className='app__flex p-text'><div /><a href={weissRef}>Weiss Products</a></li>
        </ul>
        <AiOutlineShoppingCart size={60} />
    
    </nav>
    
  )
}

export default Navbar