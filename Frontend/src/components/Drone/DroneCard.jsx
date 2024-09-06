import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import drone from "../../assets/RealDrone1.jpg"
import { Link } from "react-router-dom";

const drones = [
  {
    name: "SUDARSHAN",
    lin: "/drones/sudarshan",
    image: drone, // Replace with the actual image path
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
    image: drone, // Replace with the actual image path
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
    name: "Drone",
    lin: "/drones/drone3",
    image: drone, // Replace with the actual image path
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
  const [showHoverCard, setShowHoverCard] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="pb-16">
      <div className="">
        <h1 className='text-center font-bold text-2xl text-rose-600 font-serif py-16'>
          Drones Available
        </h1>
      </div>
      <div className="drone-container flex justify-between pb-16 px-20">
        {drones.map((drone, index) => (
          <div className="drone-card" key={index} onClick={() => navigate(drone.lin)}>
            <div className="drone-front h-64 w-80 relative bg-cover bg-center rounded-2xl shadow-md shadow-orange-500"
              style={{
                backgroundImage: `url(${drone.image})`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-2xl">
              </div>
            </div>
            <div className="">
              <div className="">
                <h2 className="z-10 text-3xl text-purple-700 text-center py-7 font-serif font-bold">{drone.name}</h2>
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