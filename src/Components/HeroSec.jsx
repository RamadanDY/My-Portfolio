import React from 'react'
import Mypic from '../Assets/Mypic.jpg'
const HeroSec = () => {
  return (
    <>
        <div className="portfolio">
            <div className="pic-container">
            <img src={Mypic} alt=""  className='h-92  w-40' />
            </div>
            <div className="sec-text">
                <div className="text-p">
                    Hello, I'm
                </div>
                <div className="title">RamDev</div>
                <div className="sec-text-pp">FrontEnd Developer</div>
                <div className="btn-container">
                    <button className='btn-color bg-red-50' onClick={window.open('../Assets/CV.pdf')}>Download CV</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroSec