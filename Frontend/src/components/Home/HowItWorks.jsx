// import React from 'react'
// import video from "../../assets/droneVideo2.mp4"

// function HowItWorks() {
//   return (
//     <div className='py-20'>
//       <div className="">
//         <h1 className='font-bold text-3xl text-center pb-20'>
//             How it Works
//         </h1>
//       </div>
//       <div className="px-5 lg:px-40 py-5">
//         <video className="w-full h-96 rounded-lg shadow-lg" controls>
//           <source src={video} type="video/mp4" />
//         </video>
//       </div>
//     </div>
//   )
// }

// export default HowItWorks

import React from 'react';

const steps = [
  {
    id: 1,
    icon: '🛒', // Order Placement Icon
    title: 'Order Placement',
    description: 'The customer places an order through the application, selecting the item to be delivered and providing the delivery address.',
    csss: "container left-container",
  },
  {
    id: 2,
    icon: '🗂️', // Order Processing Icon
    title: 'Order Processing',
    description: 'The system receives the order and checks for validity, verifying details and preparing necessary documentation.',
    
  },
  {
    id: 3,
    icon: '🚁', // Drone Assignment Icon
    title: 'Drone Assignment',
    description: 'A drone is assigned to the order based on availability and proximity, considering factors like battery life and payload capacity.',
    csss: "container left-container",
  },
  {
    id: 5,
    icon: '🗺️', // Route Planning Icon
    title: 'Route Planning',
    description: 'The optimal route is calculated using real-time weather data and traffic information to ensure a safe and efficient delivery.',
  },
  {
    id: 6,
    icon: '✈️', // Delivery Execution Icon
    title: 'Delivery Execution',
    description: 'The drone takes off and begins its journey to the destination, following the planned route and adjusting for real-time conditions.',
    csss: "container left-container",
  },
  {
    id: 7,
    icon: '📱', // Real-Time Tracking Icon
    title: 'Real-Time Tracking',
    description: 'Customers can track the drone’s progress in real-time via the application, receiving updates on location and estimated arrival time.',
  },
  {
    id: 8,
    icon: '📦', // Delivery Confirmation Icon
    title: 'Delivery Confirmation',
    description: 'The drone arrives at the delivery location and confirms the delivery, either automatically or through user confirmation.',
  },
  {
    id: 9,
    icon: '🏠', // Return to Base Icon
    title: 'Return to Base',
    description: 'The drone returns to its base station, ready for the next delivery, and undergoes necessary maintenance checks.',
  },
];

const HowItWorks = () => {
  return (
    <div className="how-it-works-section py-16 px-5 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16 px-10">
        {steps.map(step => (
          <div key={step.id} className=" flex flex-col items-center pb-16 text-center">
            <div className="icon text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            {/* <p className="text-gray-700">{step.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;