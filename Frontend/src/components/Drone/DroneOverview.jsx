import React, {useEffect} from 'react';
import Lottie from 'lottie-react';
import droneImg from "../../assets/DroneOverview.json"
import AOS from 'aos';
import 'aos/dist/aos.css';

function DroneOverview() {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className="p-6">
            <div className="">
                <h1 className='text-center font-bold text-2xl text-rose-600 font-serif pt-7'>Drone Overview</h1>
            </div>

            <div className="flex py-16">
                {/* Drone Image */}
                <div className="w-1/2 flex justify-center pl-10 items-start">
                    <Lottie animationData={droneImg} className=' h-96 z-10' />
                </div>

                {/* Key Specifications */}
                <div className="w-1/2 pt-14 pr-8" data-aos="fade-left">
                    <div className=" mx-16 pt-6 pb-10 px-5 rounded-2xl shadow-lg shadow-blue-300"
                        style={{backgroundImage: "linear-gradient( 89.9deg,  rgba(208,246,255,1) 0.1%, rgba(255,237,237,1) 47.9%, rgba(255,255,231,1) 100.2% )"}}
                    >
                        <h2 className="text-xl font-bold text-center pb-6">
                            Key Specifications
                        </h2>
                        <ul className="list-none list-inside grid gap-3 px-2">
                            <li className='text-gray-700'>
                                <span className='font-semibold text-lg text-black'>Frame Size:</span> 45 cm (heavy lifting & longer distances)
                            </li>
                            <li className='text-gray-700'>
                                <span className='font-semibold text-lg text-black'>Motors:</span> 4 BLDC motors, 15 Amp ESC
                            </li>
                            <li className='text-gray-700'>
                                <span className='font-semibold text-lg text-black'>Battery:</span> Lithium Polymer with high C rating
                                </li>
                            <li className='text-gray-700'>
                                <span className='font-semibold text-lg text-black'>Processor:</span> STM processor, F405 stack
                            </li>
                            <li className='text-gray-700'>
                                <span className='font-semibold text-lg text-black'>Software:</span> BETA flight, Arduino pilot reflashable
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* Summary Stats & Status Indicators */}
            <div className="grid grid-cols-4 gap-8 text-center px-10" data-aos="fade-up">
                <div className="p-4 shadow-blue-300 rounded-lg shadow-md border border-blue-300">
                    <h3 className="text-lg font-medium text-blue-800">Total Flights</h3>
                    <p className="text-2xl font-bold text-blue-800">150+</p>
                </div>
                <div className="p-4 shadow-green-300 rounded-lg shadow-md border border-green-300">
                    <h3 className="text-lg font-medium text-green-800">Total Distance</h3>
                    <p className="text-2xl font-bold text-green-800">500 km</p>
                </div>
                <div className="p-4 shadow-yellow-300 rounded-lg shadow-md border border-yellow-300">
                    <h3 className="text-lg font-medium text-yellow-600">Average Flight Time</h3>
                    <p className="text-2xl font-bold text-yellow-600">25 mins</p>
                </div>
                <div className="p-4 shadow-red-300 rounded-lg shadow-md border border-red-300">
                    <h3 className="text-lg font-medium text-red-600">Last Maintenance</h3>
                    <p className="text-2xl font-bold text-red-600">2024-09-01</p>
                </div>
            </div>

            {/* Operational Status
            <div className="mt-6 text-center">
                <span className="inline-block bg-green-500 text-white py-1 px-3 rounded-full text-sm font-medium">
                    Status: Active
                </span>
            </div> */}
        </div>
    );
}

export default DroneOverview;