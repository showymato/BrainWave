import React from 'react'
import DroneOverview from './DroneOverview'
import LiveStatusAndControl from './LiveStatusAndControl'
import PerformanceAnalytics from './PerformanceAnalytics'
import DiagnosticsAndLogs from './DiagnosticsAndLogs'

function Sudarshan() {
  return (
    <div>
      <DroneOverview/>
      <LiveStatusAndControl/>
      <PerformanceAnalytics/>
      <DiagnosticsAndLogs/>
    </div>
  )
}

export default Sudarshan
