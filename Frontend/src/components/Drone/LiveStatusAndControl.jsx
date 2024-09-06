import React, {useEffect} from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function LiveStatusAndControl() {
    const value=17;
    useEffect(() => {
      AOS.init();
    }, [])

  return (
    <div className="px-10 py-16">

        <div className="">
            <h1 className='text-center font-bold text-2xl text-rose-600 font-serif pt-7 pb-16'>Drone Status</h1>
        </div>

      {/* <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Live Video Feed</h2>
        <div className="">
            <img src={map} alt="" className='w-'/>
        </div>
      </div> */}


      {/* Real-Time Data */}
      <div className="grid grid-cols-4 gap-8 pb-16" data-aos="fade-left">
        <div className="p-4 bg-white rounded-2xl shadow-xl">
          <h3 className="text-lg font-medium text-gray-700 pb-4">Battery Life</h3>
          <p className="text-2xl font-bold text-green-600 pb-4">75%</p>
          <div className="w-full bg-gray-200 rounded-full h-12 mt-2 pb-4">
            <div className="bg-green-600 h-12 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
        <div className="p-4 bg-white rounded-2xl shadow-xl">
          <h3 className="text-lg font-medium text-gray-700 pb-4">Speed (m/s)</h3>
          <CircularProgressbar value={value} maxValue={50} text={`${value}`} className='h-32'/>
        </div>
        <div className="p-4 bg-white rounded-2xl shadow-xl">
          <h3 className="text-lg font-medium text-gray-700">Altitude</h3>
          <p className="text-4xl font-bold text-red-700 flex justify-center items-center pt-10">150 m</p>
        </div>
        <div className="p-4 bg-white rounded-2xl shadow-xl">
          <h3 className="text-lg font-medium text-gray-700 pb-7">GPS Coordinates</h3>
          <p className="text-2xl font-bold text-orange-600 px-8">Lat: 37.7749</p>
          <p className="text-2xl font-bold text-orange-600 px-8">Lon: -122.4194</p>
        </div>
        {/* <div className="p-4 bg-white rounded-lg shadow col-span-2">
          <h3 className="text-lg font-medium text-gray-700">Obstacles in View</h3>
          <p className="text-2xl font-bold text-red-600">Yes</p>
        </div> */}
      </div>

      {/* Control Panel */}
      {/* <div className="flex justify-around">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600">
          Return to Home
        </button>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow hover:bg-yellow-600">
          Activate Fail-Safe
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600">
          GPS Mode
        </button>
      </div> */}
    </div>
  );
}

export default LiveStatusAndControl;