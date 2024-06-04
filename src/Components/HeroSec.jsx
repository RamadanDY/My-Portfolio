import React from 'react'
import cv from '../Assets/MyCV.pdf'
import Mypic from '../Assets/Mypic.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import '../Components/'


const HeroSec = () => {
    const handleDownload = () =>  {
        window.open(cv, '_blank');

    }
  return (
    <>
        <div className="portfolio flex flex-row justify-center h-90">
            <div className="pic-container">
            <img src={Mypic} alt=""  className='h-92  w-40' />
            </div>
            <div className="sec-text">
                <div className="text-p">
                    Hello, I'm
                </div>
                <div className="title">RamDev</div>
                <div className="sec-text-pp">FrontEnd Developer</div>
                <div className="btn-Cv">
                    <button className="btn-color bg-red-50" onClick={handleDownload}>
                    Download CV
                    </button>               
                </div>
                {/* remember to make a link to the contact section when the btn is clicked */}
                <div className="btn-Info">
                    <button className="btn-color bg-red-50" >
                    Contact Info
                    </button>               
                </div>
                <div className="container-socials">
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
                        <FaLinkedin />
                        </a>
                    </div>
                    <div className="github">
                        <a href="https://github.com/RamadanDY"> 
                        <FaSquareGithub />
                        </a>
                    </div>
                                  
                </div>
                
            </div>
        </div>
    </>
  )
}

export default HeroSec