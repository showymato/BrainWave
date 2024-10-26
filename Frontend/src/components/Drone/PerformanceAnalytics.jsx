import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';

function PerformanceAnalytics() {
    return (
        <div className='px-10 pb-16'>
            <div className="">
                <div className="">
                    <h1 className='text-center font-bold text-2xl text-rose-600 pt-7 pb-16'>
                        Performance Analysis
                    </h1>
                </div>

                <div className="flex">
                    <div className="flex justify-center items-center w-1/2 px-10 rounded-xl shadow-xl ">
                        <LineChart
                            xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9], label: 'Order Number' }]}
                            series={[
                                { data: [80, 83, 85, 88, 90, 92, 88, 89, 90], label: 'Battery Life (%)' },
                                { data: [85, 87, 90, 92, 91, 93, 94, 92, 95], label: 'Performance (%)' },
                                { data: [120, 115, 110, 108, 105, 102, 110, 107, 100], label: 'Order Completion Time (Minutes)' }
                            ]}
                            width={600}
                            height={400}
                        />
                    </div>



                    <div className="flex flex-col justify-center items-center w-1/2 rounded-xl shadow-xl ml-10">
                        <h1 className='text-center font-bold text-xl text-blue-800 pt-8'>
                            Request Type
                        </h1>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: 'Organ' },
                                        { id: 1, value: 15, label: 'Medicines' },
                                        { id: 2, value: 20, label: 'Blood' },
                                        { id: 2, value: 12, label: 'MedKits' },
                                    ],
                                },
                            ]}
                            width={450}
                            height={250}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PerformanceAnalytics

