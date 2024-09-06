import React from 'react'
import WeatherApp from '../components/Weather-website-main/WeatherApp'
import WeatherCard from '../components/Weather-website-main/WeatherCard'

function WeatherForcastPage() {
  return (
    <div className='pt-16 pb-24'
      style={{backgroundImage: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(234,249,249,0.67) 0.1%, rgba(239,249,251,0.63) 90.1% )"}}
    >
      <WeatherApp/>
      <WeatherCard/>
    </div>
  )
}

export default WeatherForcastPage