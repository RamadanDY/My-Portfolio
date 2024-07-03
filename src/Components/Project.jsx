import React from 'react'
import pic1 from '../Assets/mk1.png'
import pic2 from '../Assets/mk2.png'
import pic3 from '../Assets/p2.png'
import './Project.css'

const Project = () => {
  return (
    <div className='Project-wrapper mt-36'>
        <div className="header flex flex-col justify-center items-center ">
            <h3 className='m-4 text-xl'>Browse through</h3>
            <p className=' mb-8 text-4xl'>My Projects</p>
        </div>
        <div className="cards">
            <div className="details-container  flex flex-row justify-center align-center">
                <div className="card1 flex flex-col justify-center items-center">              
                    <img src={pic1} alt="" srcset="" className='img '/>            
                    <p className='text-black mt-4 font-bold text-2xl'>Project One</p>
                    <div className="btn mt-9 ">
                        <button className='bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full' type="button">Demo</button>  
                        <button className='bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full' type="button">Grand Hotel</button> 
                    </div>                    
                </div>
                <div className="card2  flex text-black flex-col justify-center items-center ">                
                    <img src={pic2} alt="" srcset="" className='img'/>   
                    <p className='text-name mt-4 text-black font-bold text-2xl'>Project Two</p>
                    <div className="btn mt-9 ">
                        <button className='bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full' type="button">Demo</button>  
                        <button className='bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full' type="button">Recipe</button> 
                    </div>                      
                </div>
                <div className="card3  flex flex-col justify-center items-center">              
                    <img src={pic3} alt="" srcset="" className='img'/> 
                    <p className='text-name mt-4 text-black font-bold text-2xl'>Project Three</p>  
                    <div className="btn mt-9  ">
                        <button className='bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full' type="button">Demo</button>  
                        <button className='bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full' type="button">Loopstudios</button> 
                    </div>                           
                </div>
            </div>
        </div>
    </div>  
   )
}

export default Project
