import React from 'react'
import { useState } from 'react';
import './Navbar.css'
import { FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
    const [isOpen , setIsopen] = useState(false);
    const  toggleMenu = () =>  {
        setIsopen(!isOpen)

    };
  return (
    <div className='wrapper'>
        <div>
            <div className="desktop-nav flex flex-row items-center justify-around h-17vh font-mono   cursor-pointer text-black-500">
                <div className="logo text-gray-500 border border-transparent rounded-md text-5xl hover:border-neutral-600">RamDev</div>
                <div className="nav-links flex flex-row gap-2rem list-none   cursor-pointer">
                    <li className='About hover:underline hover:text-gray-400 transition-all duration-300 text-2xl hover:text-xl'>About</li>
                    <li className='Experience hover:underline  hover:text-gray-400 transition-all duration-300 text-2xl hover:text-xl'>Experience</li>
                    <li className='Project hover:underline hover:text-gray-400 transition-all duration-300 text-2xl hover:text-xl'>Project</li>
                    <li className='Contact hover:underline hover:text-gray-400 transition-all duration-300 text-2xl hover:text-xl'>Contact</li>
                </div>
            </div>

        </div>
        <nav className='Hamburger-nav flex flex-row items-center h-17vh  justify-around '>
        <div className="logo">RamDev</div>
        <div className="humberger-menu">
            <div className="humberger-icon text-gray-400 " onClick={toggleMenu} >
                {isOpen ? <FaTimes size={30} /> : <FaBars size={30}/>} 
            </div>
            <div className="menu-links list-none" style={{ display: isOpen ? 'block' : 'none' }}>
                <div>
                <li className='About duration-300 text-2xl  ' onClick={toggleMenu}>About</li>
                <li className='Experience  duration-300 text-2xl  ' onClick={toggleMenu}>Experience</li>
                <li className='Project duration-300 text-2xl  ' onClick={toggleMenu}>Project</li>
                <li className='Contact duration-300 text-2xl  ' onClick={toggleMenu}>Contact</li>
                </div>
                
            </div>
        </div>
    </nav>
    </div>
    
  )
}

export default Navbar