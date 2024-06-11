import React from 'react'
import './Experience.css'
import { PiSealCheckFill } from "react-icons/pi";

const Experience = () => {
  return (
    <div className='experience-wrapper  bg-red-500'>
      <div className="experience-wrap">
        <div className="ex-text flex flex-col justify-center items-center">
          <div className="text">Explore My</div>
          <div className="sub-text text-3xl">Experience</div>
        </div>
      </div>
      <div className="container-wrapper">
        <div className="frontend">
          <div className="front">
            FrontEnd Development  
          </div>
          <div className="1">
            <PiSealCheckFill />
            <h3>html</h3>
            <p>Experienced</p>
          </div>
          <div className="2">
            <PiSealCheckFill />
            <h3>html</h3>
            <p>Experienced</p>
          </div>
          <div className="3">
            <PiSealCheckFill />
            <h3>html</h3>
            <p>Experienced</p>
          </div>
          <div className="4">
            <PiSealCheckFill />
            <h3>html</h3>
            <p>Experienced</p>
          </div>
          <div className="5">
            <PiSealCheckFill />
            <h3>html</h3>
            <p>Experienced</p>
          </div>
          <div className="6">
            <PiSealCheckFill />
            <h3>html</h3>
            <p>Experienced</p>
          </div>
          <div className="7">
            <PiSealCheckFill />
            <h3>html</h3>
            <p>Experienced</p>
          </div>
          <div className="8">
            <PiSealCheckFill />
            <h3>html</h3>
            <p>Experienced</p>
          </div>
          <div className="9">
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