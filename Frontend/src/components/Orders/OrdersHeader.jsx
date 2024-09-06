import React from 'react'

function OrdersHeader() {
  return (
    <div className='flex justify-between py-10 px-10'>
      <div className="">
        <h1 className='text-3xl font-semibold'>Orders Summary</h1>
      </div>
      <div className="">
        <label className="input border-2 flex items-center gap-2 py-2 px-3 rounded-xl">
            <input type="text" className="grow border-none focus:outline-none" placeholder="Search" />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6 opacity-60">
                <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd" />
            </svg>
        </label>
      </div>
    </div>
  )
}

export default OrdersHeader
