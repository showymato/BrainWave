import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import drone1 from "../../assets/Drones/drone1.jpg"
import drone2 from "../../assets/Drones/drone2.jpg"
import drone3 from "../../assets/Drones/drone3.jpg"

const drones = [
  {
    name: "SUDARSHAN",
    lin: "/drones/sudarshan",
    image: drone1, // Replace with the actual image path
    specs: {
      speed: "220 km/h",
      flightTime: "25 minutes",
      range: "30 km",
      features: [
        "Compact Size",
        "Increased Manoeuvrability",
        "Autonomous",
        "Live Video Transmission",
        "Acrobatic",
      ],
    },
  },
  {
    name: "JATAYU",
    lin: "/drones/jatayu",
    image: drone2, // Replace with the actual image path
    specs: {
      speed: "150 km/h",
      flightTime: "30 minutes",
      range: "30 km",
      features: [
        "Modular Design",
        "Autonomous GPS Return",
        "Fail Safe Mode",
        "Onboard Computer",
      ],
    },
  },
  {
    name: "Arjun",
    lin: "/drones/drone3",
    image: drone3, // Replace with the actual image path
    specs: {
      speed: "150 km/h",
      flightTime: "30 minutes",
      range: "30 km",
      features: [
        "Modular Design",
        "Autonomous GPS Return",
        "Fail Safe Mode",
        "Onboard Computer",
      ],
    },
  },
  // Add third drone
];

const DroneCard = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-16"
      style={{backgroundImage: "linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )"}}
    >
      <div className="">
        <h1 className='text-center font-bold text-2xl text-rose-600 font-serif py-16'>
          Drones Available
        </h1>
      </div>
      <div className="drone-container flex justify-between pb-16 px-20">
        {drones.map((drone, index) => (
          <div className="drone-card" key={index} onClick={() => navigate(drone.lin)}>
            <div className="drone-front h-64 w-80 relative bg-cover bg-center rounded-2xl border border-orange-500 shadow-md shadow-orange-500"
            >
              <img src={drone.image} alt="" className="h-64 w-80 rounded-2xl"/>
            </div>
            <div className="">
              <div className="">
                <h2 className="z-10 text-3xl text-orange-500 text-center py-7 font-serif font-bold">{drone.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DroneCard;

{/* <div className="drone-back">
            <h3>Specifications</h3>
            <ul>
              <li>Speed: {drone.specs.speed}</li>
              <li>Flight Time: {drone.specs.flightTime}</li>
              <li>Range: {drone.specs.range}</li>
              {drone.specs.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div> */}