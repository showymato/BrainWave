import React from 'react';
import DroneOverview from './DroneOverview';
import LiveStatusAndControl from './LiveStatusAndControl';
import PerformanceAnalytics from './PerformanceAnalytics';
import DiagnosticsAndLogs from './DiagnosticsAndLogs';
import Drones from './Drones';

function Drone() {
  return (
    <div className="">
      {/* <DroneOverview/>
      <LiveStatusAndControl/>
      <PerformanceAnalytics/>
      <DiagnosticsAndLogs/> */}
      <Drones/>
    </div>
  );
}

export default Drone;