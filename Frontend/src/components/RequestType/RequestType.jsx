import React from 'react'
import organs from "../../assets/organ2.jpg"
import medicines from "../../assets/Medicines.jpg"
import medKit from "../../assets/MedKit.jpg"
import blood from "../../assets/blood.jpg"
import RequestTypeCard from './RequestTypeCard'
import { Link } from 'react-router-dom'

const requestype = [
    {
        title: "Organ",
        image: organs,
        lin: "/organForm"
    },
    {
        title: "Medicines",
        image: medicines,
        lin: "/medicineForm"
    },
    {
        title: "Blood",
        image: blood,
        lin: "/bloodForm"
    },
    {
        title: "Medkit",
        image: medKit,
        lin: "/medkitForm"
    },
]

function RequestType() {
  return (
    <div className="py-16">
        <div>
        <h1 className='text-2xl text-center font-serif font-bold text-rose-600'>Choose Emergency Type</h1>
        </div>
        <div className="grid grid-cols-4 mx-10 my-10">
            {requestype.map((map) => (
                <Link to={map.lin}>
                    <RequestTypeCard title={map.title} image={map.image}/>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default RequestType
