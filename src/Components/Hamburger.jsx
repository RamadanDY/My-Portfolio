import React, { useState } from 'react'
import './Hamburger.css'
// import Mypic from '../Assets/Mypic.jpg'

const Hamburger = () => {
    
    const [isOpen , setIsopen] = useState();
    const  toggleMenu = () =>  {
        setIsopen(!isOpen)

    };
  return (
    <nav className='Hamburger-nav'>
        <div className="logo">Ramadan Yakubu</div>
        <div className="humberger-menu">
            <div className="humberger-icon" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
               
            </div>
            <div className="menu-links">
            <li className='About hover:underline hover:text-gray-400 transition-all duration-300 text-2xl hover:text-xl ' onClick={toggleMenu}>About</li>
                <li className='Experience hover:underline  hover:text-gray-400 transition-all duration-300 text-2xl hover:text-xl ' onClick={toggleMenu}>Experience</li>
                <li className='Project hover:underline hover:text-gray-400 transition-all duration-300 text-2xl hover:text-xl ' onClick={toggleMenu}>Project</li>
                <li className='Contact hover:underline hover:text-gray-400 transition-all duration-300 text-2xl hover:text-xl ' onClick={toggleMenu}>Contact</li>
            </div>
        </div>
    </nav>
  )
}

export default Hamburger