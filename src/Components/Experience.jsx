import React from 'react'
import './Experience.css'
import { PiSealCheckFill } from "react-icons/pi";

const Experience = () => {
  return (
    <div className='experience-wrapper  '>
      <div className="experience-wrap">
        <div className="ex-text flex flex-col justify-center items-center">
          <div className="text">Explore My</div>
          <div className="sub-text text-3xl tracking-widest">Experience</div>
          <div className="front ">
            Tech Stack 
          </div>
        </div>
      </div>
      <div className="container-wrapper  ">
        
        <div className="frontend grid grid-cols-2 gap-4 justify-center items-center">
          <div className="1 flex flex-col justify-center items-center mt-4">
            <PiSealCheckFill size={30}/>
            <h3>REACT JS</h3>
            <p>Experienced</p>
          </div>
          <div className="2 flex flex-col justify-center items-center mt-4">
            <PiSealCheckFill size={30}/>
            <h3>NODE JS</h3>
            <p>Intermediate</p>
          </div>
          <div className="3 flex flex-col justify-center items-center">
            <PiSealCheckFill size={30}/>
            <h3>MONGO DB</h3>
            <p>Experienced</p>
          </div>
          <div className="4 flex flex-col justify-center items-center">
            <PiSealCheckFill size={30}/>
            <h3>EXPRESS</h3>
            <p>Beginner</p>
          </div>
          <div className="5 flex flex-col justify-center items-center">
            <PiSealCheckFill size={30}/>
            <h3>Tailwind CSS</h3>
            <p>Experienced</p>
          </div>
          <div className="6 flex flex-col justify-center items-center">
            <PiSealCheckFill size={30}/>
            <h3>Git</h3>
            <p>Experienced</p>
          </div>
          <div className="6 flex flex-col justify-center items-center mb-4">
            <PiSealCheckFill size={30}/>
            <h3>GitLab</h3>
            <p>Experienced</p>
          </div>
          <div className="6 flex flex-col justify-center items-center mb-4">
            <PiSealCheckFill size={30}/>
            <h3>VS Code</h3>
            <p>Experienced</p>
          </div>       
        </div>
        <div className="backend"></div>
      </div>
    </div>
  )
}

export default Experience