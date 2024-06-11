import React from 'react'
import './Experience.css'
import { PiSealCheckFill } from "react-icons/pi";

const Experience = () => {
  return (
    <div className='experience-wrapper  bg-red-500'>
      <div className="experience-wrap">
        <div className="ex-text flex flex-col justify-center items-center">
          <div className="text">Explore My</div>
          <div className="sub-text text-3xl tracking-widest">Experience</div>
        </div>
      </div>
      <div className="container-wrapper">
        <div className="frontend flex flex-col justify-center items-center">
          <div className="front ">
            Tech Stack 
          </div>
          <div className="1">
            <PiSealCheckFill />
            <h3>REACT JS</h3>
            <p>Experienced</p>
          </div>
          <div className="2">
            <PiSealCheckFill />
            <h3>NODE JS</h3>
            <p>Intermediate</p>
          </div>
          <div className="3">
            <PiSealCheckFill />
            <h3>MONGO DB</h3>
            <p>Experienced</p>
          </div>
          <div className="4">
            <PiSealCheckFill />
            <h3>EXPRESS</h3>
            <p>Beginner</p>
          </div>
          <div className="5">
            <PiSealCheckFill />
            <h3>Tailwind CSS</h3>
            <p>Experienced</p>
          </div>
          <div className="6">
            <PiSealCheckFill />
            <h3>html</h3>
            <p>Experienced</p>
          </div>
          
        </div>
        <div className="backend"></div>
      </div>
    </div>
  )
}

export default Experience