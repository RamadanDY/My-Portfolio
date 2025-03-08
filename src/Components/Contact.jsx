import React from 'react'
import './Contact.css';
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
    const currentYear = new Date().getFullYear();

  return (
    <div className='Contact mt-52'>
        <div className='Contact-wrapper flex flex-col justify-center items-center'>
            <div className="header mb-2 border-t p-2">Get In Touch</div>
            <div className="sub-header text-5xl mb-12">
                Contact Me 
            </div>
            <div className="Info p-1 grid grid-cols-2 gap-3">
                <div className="email flex flex-col justify-center items-center">
                    <TfiEmail size={50} className='m-3'/>
                    <p className="mr-2 text-xl">daudalaramadan@gmail.com</p>
                </div>
                <div className="number flex flex-col items-center m-2">
                    <FaPhoneVolume size={50}  className='m-3'/>
                    <p className="mr-2 text-xl">(+233) 500796856</p>
                </div>
                <div className="linkedIn col-span-2 flex flex-col justify-center items-center">
                    <FaLinkedin size={50} className='m-3'/>
                    <p className="mr-2 text-xl">ramadan-yakubu</p>
                </div>
            </div>  
            <footer className="footer text-xl m-10 text-white py-4 text-center">
                <p>&copy; {currentYear} RamDev🤖. All rights reserved.</p>
            </footer>  
        </div>
    </div>
  )
}

export default Contact;