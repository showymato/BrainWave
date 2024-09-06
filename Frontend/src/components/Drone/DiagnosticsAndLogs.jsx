import React from 'react';

const DiagnosticsAndLogs = () => {
    const droneHealthStatus = {
        batteryHealth: '90% - Good',
        motorStatus: 'All 4 motors operational',
        escStatus: 'ESC functioning normally',
        temperature: '22°C',
        humidity: '50%',
        leakageDetection: 'No leakage detected',
    };

    const errorLogs = [
        { timestamp: '2024-09-04 14:23', errorCode: 'E101', description: 'Minor voltage drop', resolved: true },
        { timestamp: '2024-09-03 11:15', errorCode: 'E202', description: 'GPS signal lost', resolved: false },
    ];

    const diagnosticsResults = {
        gpsAccuracy: '6 satellites valid',
        compassCalibration: 'Calibration successful',
    };

    return (
        <div className='px-10 pt-12 pb-24'>
            <div className="">
                <h1 className='text-center font-bold text-2xl text-rose-600 font-serif pt-7 pb-16'>
                    Diagnostics and Logs
                </h1>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px' }}>

                {/* Drone Health Status */}
                <div style={{ flex: '1', padding: '20px' }} className='shadow-xl rounded-xl'>
                    <h3 className='font-semibold text-xl text-blue-800 text-center pb-3'>
                        Drone Health Status
                    </h3>
                    <p>Battery Health: {droneHealthStatus.batteryHealth}</p>
                    <p>Motor Status: {droneHealthStatus.motorStatus}</p>
                    <p>ESC Status: {droneHealthStatus.escStatus}</p>
                    <p>Temperature: {droneHealthStatus.temperature}</p>
                    <p>Humidity: {droneHealthStatus.humidity}</p>
                    <p>Leakage Detection: {droneHealthStatus.leakageDetection}</p>
                </div>

                {/* Error Logs */}
                <div style={{ flex: '1', padding: '20px' }} className='shadow-xl rounded-xl'>
                    <h3 className='font-semibold text-xl text-blue-800 text-center pb-6'>
                        Recent Error Logs
                    </h3>
                    {errorLogs.map((log, index) => (
                        <p key={index}>
                            {log.timestamp} - Code: {log.errorCode} - {log.description} - Resolved: {log.resolved ? 'Yes' : 'No'}
                        </p>
                    ))}
                    <div className="flex items-center justify-center pt-5">
                        <button className='bg-blue-500 text-white rounded-xl py-2 font-semibold px-3'>
                            View Full Logs
                        </button>
                    </div>
                </div>

                {/* Diagnostics Results */}
                <div style={{ flex: '1', padding: '20px' }} className='shadow-xl rounded-xl'>
                    <h3 className='font-semibold text-xl text-blue-800 text-center pb-3'>Diagnostics Results</h3>
                    <p>GPS Accuracy: {diagnosticsResults.gpsAccuracy}</p>
                    <p>Compass Calibration: {diagnosticsResults.compassCalibration}</p>
                    <div className="flex items-center justify-center pt-16">
                        <button className='bg-blue-500 text-white rounded-xl py-2 font-semibold px-3'>
                            Run Diagnostics
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default DiagnosticsAndLogs;