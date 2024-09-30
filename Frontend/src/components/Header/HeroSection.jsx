import React from 'react'
import Lottie from 'lottie-react';
import drone from "../../assets/heroDrone.json"
import drone1 from "../../assets/DroneOrderAnimation.json"
import emergency from "../../assets/emergency.png"
// import emergency from "../../assets/emer7.png"
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='flex p-24' 
      // style={{backgroundImage: 'linear-gradient( 109.6deg,  rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1% )'}}
    >
      <div className="w-1/2 px-10 pt-6">
        <h1 className='text-4xl font-bold pb-8'>
          <span className='text-rose-600'>Saving Lives</span> with Swift Medical Deliveries
        </h1>
        <h2 className='text-stone-500 text-md font-semibold text-justify pb-8'>Dedicated to Enhancing Emergency Medical Response with Innovative Drone Technology, Ensuring Swift and Safe Delivery of life saving supplies when every moment matters.</h2>
        <div className="bg-red-500 py-2 text-center rounded-3xl font-bold px-2 w-40 text-white">
          <Link to="/requestType">
            <button className=''>Urgent Delivery</button>
          </Link>
        </div>
        <div class="flex justify-start gap-4 mt-8">
          <div class="bg-blue-100 text-blue-600 py-4 px-4 w-44 rounded-lg shadow-md">
            <p class="text-md font-bold">Connections with 50+ Hospitals</p>
          </div>
          <div class="bg-red-100 text-red-600 py-4 px-4 w-44 rounded-lg shadow-md">
            <p class="text-md font-bold">500+ Lives Saved so far</p>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center pl-16">
        <Lottie animationData={drone1} className=' h-80 z-10'/>
      </div>

      {/* <div className="absolute  left-64">
          <Lottie animationData={drone} className=' h-80 z-10'/>
        </div>
        <div className="absolute top-48">
          <img src={emergency} alt="" className='w-3/4 h-80 rounded-xl z-1'/>
        </div> */}

    </div>
  )
}

export default HeroSection