import React from 'react';
import Lottie from 'lottie-react';
import drone from "../../assets/DroneOrderAnimation2.json"

function DroneCondition() {
    // Static data for the drone's current condition
    const droneData = {
        id: 'DRONE001',
        status: 'Active',
        batteryLevel: '85%', // Example: 85% battery remaining
        currentLocation: 'Downtown Springfield',
        eta: '15 minutes', // Estimated time to reach the destination
        condition: 'OK', // Status of the drone (OK or any issues)
        obstacles: 'No obstacles in view',
    };

    return (
        <div className="py-5 px-8 bg-white rounded-xl shadow-md border-2 border-blue-200 shadow-blue-200"
        // style={{backgroundImage: "radial-gradient( circle farthest-corner at 7.5% 14.2%,  rgba(254,243,240,1) 0%, rgba(250,236,252,1) 90% )"}}
        >
            <div className="mb-4 flex justify-between">
                <h2 className="text-2xl font-bold text-blue-800">Drone Condition</h2>
                <button className='font-medium bg-red-600 py-1 px-3 rounded-xl text-white'>In Detail</button>
            </div>

            <div className="flex">
                <div className="grid gap-1">
                    <div>
                        <h3 className=""><span className='text-gray-700 font-medium'>Drone ID: </span>{droneData.id}</h3>
                    </div>
                    <div>
                        <h3 className=""><span className='text-gray-700 font-medium'>Status: </span>{droneData.status}</h3>
                    </div>
                    <div>
                        <h3 className=""><span className='text-gray-700 font-medium'>Battery Level: </span>{droneData.batteryLevel}</h3>
                    </div>
                    <div>
                        <h3 className=""><span className='text-gray-700 font-medium'>ETA: </span>{droneData.eta}</h3>
                    </div>
                    <div>
                        <h3 className=""><span className='text-gray-700 font-medium'>Condition: </span>{droneData.condition}</h3>
                    </div>
                    <div>
                        <h3 className=""><span className='text-gray-700 font-medium'>Obstacles: </span>{droneData.obstacles}</h3>
                    </div>
                    <div>
                        <h3 className=""><span className='text-gray-700 font-medium'>Current Location: </span>{droneData.currentLocation}</h3>
                    </div>
                </div>
                <div className="">
                    <Lottie animationData={drone} className=' h-60 z-10' />
                </div>
            </div>
        </div>
    );
}

export default DroneCondition;
