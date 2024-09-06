import React, {useEffect} from 'react'
import feature1 from "../../assets/Images/feature1.avif"
import feature2 from "../../assets/Images/feature2.png"
import drone3 from "../../assets/Images/drone3.png"
import FeaturesCard from './FeaturesCard'
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    title: "Precise Navigation",
    description: "MedDrone X navigates through complex terrains to deliver critical medical supplies on time",
    image: feature1,
  },
  {
    title: "Efficient Delievry",
    description: "MedDrone X ensures rapid and secure trasnportation of organs, medicines and emergency supplies",
    image: feature2,
  },
  {
    title: "Life-Saving Imapact",
    description: "With MedDrone X, you're a part of the future of healthcare, saving lives one delivery at a time",
    image: drone3,
  },
]

function Features() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='py-16 pb-16 bg-gray-50'>
      <div className="">
        <h1 className='font-bold text-3xl text-center pb-20'>Features</h1>
      </div>
      <div className="flex justify-between px-20" data-aos="fade-up">
        {features.map((feature, index) => (
          <FeaturesCard
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Features
