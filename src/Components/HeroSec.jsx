import React from 'react'
import cv from '../Assets/MyCV.pdf'
import Mypic from '../Assets/Mypic.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import './HeroSection.css'


const HeroSec = () => {
    const handleDownload = () =>  {
        window.open(cv, '_blank');

    }
  return (
    <>
        <div className="portfolio flex flex-row items-center justify-center  gap-x-72 ">
            <div className="pic-container">
                <img src={Mypic} alt=""  className='h-92  w-40 rounded-full ' />
            </div>
            <div className="sec-text flex flex-col gap-4">
                <div className="wrapper-hero flex flex-col ">
                    <div className="text-p flex justify-center text-1xl font-mono">
                            Hello, I'm
                        </div>
                        <div className="title text-4xl flex justify-center font-serif ">RamDev</div>
                    <div className="sec-text-pp text-2xl flex justify-center">FrontEnd Developer</div>
                </div>
                <div className="btn-wrapper flex flex-row  gap-3">
                    <div className="btn-Cv">
                        <button className="btn-color font-mono bg-red-50 py-4 px-2" onClick={handleDownload}>
                        Download CV
                        </button>               
                    </div>
                    {/* remember to make a link to the contact section when the btn is clicked */}
                    <div className="btn-Info">
                        <button className="btn-color bg-red-50 font-mono py-4 px-2" >
                        Contact Info
                        </button>               
                    </div>
                </div>
                
                <div className="container-socials flex flex-row justify-evenly ">
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
                        <FaLinkedin size={30}/>
                        </a>
                    </div>
                    <div className="github">
                        <a href="https://github.com/RamadanDY"> 
                        <FaSquareGithub size={30} />
                        </a>
                    </div>
                                  
                </div>
                
            </div>
        </div>
    </>
  )
}

export default HeroSec