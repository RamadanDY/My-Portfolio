import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
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
  )
}

export default Navbar