import React from 'react'
import DiagnosticsAndLogs from './DiagnosticsAndLogs'
import PerformanceAnalytics from './PerformanceAnalytics'
import LiveStatusAndControl from './LiveStatusAndControl'
import DroneOverview from './DroneOverview'

function Jatayu() {
  return (
    <div>
      <DroneOverview/>
      <LiveStatusAndControl/>
      <PerformanceAnalytics/>
      <DiagnosticsAndLogs/>
    </div>
  )
}

export default Jatayu
