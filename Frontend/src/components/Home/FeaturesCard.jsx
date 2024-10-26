import React from 'react';

function FeaturesCard({ title, description, image }) {
  return (
      <div className='border border-rose-500 rounded-2xl shadow-rose-300 shadow-md hover:shadow-purple-500 hover:border-purple-500 hover:shadow-lg transition-all duration-300 ease-in-out'>
        <div className="card bg-base-100 w-80">
          <figure>
            <img
                src={image}
                alt=""
                className='h-56 w-80 rounded-t-2xl transition-all duration-300 ease-in-out' // Added transition for the image as well
            />
          </figure>
          <div className="card-body flex flex-col gap-y-3 py-10 px-6 text-justify">
            <div className="">
              <h2 className="card-title font-semibold text-center text-xl font-mono">{title}</h2>
            </div>
            <div className="">
              <p className='text-md text-gray-700'>{description}</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default FeaturesCard;
