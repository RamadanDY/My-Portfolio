import React from 'react'
import './About.css'
import Mypic from '../Assets/Mypic.jpg'
import { GrUserExpert } from "react-icons/gr";
import { ImBook } from "react-icons/im";

const About = () => {
  return (
    <>
      <div className=' About-wrapper flex flex-col justify-center items-center  '>
        <div className="head pb-12 pt-8">
          <h3 className=' flex  justify-center items-center  pb-5 '>Get To Know More 🤖</h3>
          <h3 className=' flex  justify-center items-center text-4xl text-gray-500 gap  font-mono'>About Me</h3>
        </div>
        <div className="  wrapper flex flex-col md:flex-row md:h-80vh gap-60 max-w-4xl mx-auto">
          <div className="img-wrapper h-92 w-40 pt-3 pr-5">
            <img src={Mypic} alt="Profile" className="rounded-full" />
          </div>
          <div className=" text grid grid-cols-2 gap-3">
            <div className="tex-wra p-3 experience flex flex-col justify-center items-center">
              <GrUserExpert size={30} />
              <div className="text-wrap flex flex-col  justify-center items-center border-slate-950 red">
                <h3>Experience</h3>
                <h3>2+ years</h3>
                <h3>Front-End Developer</h3>
              </div>
            </div>
            <div className="tex-wra education flex flex-col justify-center items-center">
              <ImBook size={30} />
              <div className="t-wrap flex flex-col justify-center items-center">
                <h3>Education</h3>
                <h3>B.Sc Bachelors Degree</h3>
                <h3>M.Sc Information Technology</h3>
              </div>
            </div>
            {/* <div className="text-wrapper col-span-2 flex flex-col justify-center items-center">
              <p>The choice of scheduling algorithm depends on factors <br />
                such as the system's requirements, workload characteristics, <br />
                and desired performance metrics. Often, a combination of different <br />
                algorithms or variations is used to achieve optimal performance in various <br />
                scenarios.
              </p>
            </div>   */}
          </div>
        </div>  
      </div>
       
    
    
    </>
  )
}

export default About