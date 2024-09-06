import React from 'react';
import Lottie from 'lottie-react';
import orderAnime from "../../assets/OrderAnimation.json"

function OrderInProcess() {
    // Static data for the order currently in process
    const currentOrder = {
        id: 'ORD123456',
        name: 'John Doe',
        location: '123 Main St, Springfield',
        requestDate: '2024-09-02',
        contact: '123-456-7890',
        status: 'In Process',
        orderType: 'Organ'
    };

    return (
        <div className="py-5 px-8 bg-white rounded-xl shadow-md border-2 border-blue-200 shadow-blue-200"
        // style={{backgroundImage: "radial-gradient( circle farthest-corner at 7.5% 14.2%,  rgba(254,243,240,1) 0%, rgba(250,236,252,1) 90% )"}}
        >
            <div className="mb-4 flex justify-between">
                <h2 className="text-2xl font-bold text-blue-800 font-serif">Current Order in Process</h2>
                <button className='font-serif font-medium bg-red-600 py-1 px-3 rounded-xl text-white'>In Detail</button>
            </div>

            <div className="flex">
                <div className="grid gap-1">
                    <div>
                        <h3 className=""><span className='text-gray-700 font-medium'>Order ID: </span>{currentOrder.id}</h3>
                    </div>
                    <div>
                        <h3 className=""><span className='text-gray-700 font-medium'>Customer Name: </span>{currentOrder.name}</h3>
                    </div>
                    <div>
                        <h3 className=""><span className='text-gray-700 font-medium'>Order Type: </span>{currentOrder.orderType}</h3>
                    </div>
                    <div>
                        <h3 className=""><span className='text-gray-700 font-medium'>Requested Date: </span>{currentOrder.requestDate}</h3>
                    </div>
                    <div>
                        <h3 className=""><span className='text-gray-700 font-medium'>Contact: </span>{currentOrder.contact}</h3>
                    </div>
                    <div>
                        <h3 className=""><span className='text-gray-700 font-medium'>Status: </span>{currentOrder.status}</h3>
                    </div>
                    <div>
                        <h3 className=""><span className='text-gray-700 font-medium'>Delivery Location: </span>{currentOrder.location}</h3>
                    </div>
                </div>
                <div className="">
                    <Lottie animationData={orderAnime} className=' h-60 z-10' />
                </div>
            </div>

        </div>
    );
}

export default OrderInProcess;