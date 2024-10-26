import React from 'react'

function RequestTypeCard({image, title}) {
  return (
    <div className='m-5 py-5'>
      <div className="flex flex-col justify-center items-center">
            <div className="">
                <img src={image} alt="request type" className='h-36 w-48 rounded-xl'/>
            </div>
            <div className="text-xl font-semibold pt-5">
                {title}
            </div>
        </div>
    </div>
  )
}

export default RequestTypeCard
