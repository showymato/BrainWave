import React, {useState} from 'react'
import atmosphere from "./tempicons/atmosphere.svg"
import clouds from "./tempicons/clouds.svg"
import drizzle from "./tempicons/drizzle.svg"
import rain from "./tempicons/rain.svg"
import snow from "./tempicons/snow.svg"
import storm from "./tempicons/storm.svg"
import sun from "./tempicons/sun.svg"

function WeatherCard() {
          
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({
    name: 'Cityname',
    country: '',
    temp: 0,
    description: 'Description',
    feels_like: 0,
    humidity: 0,
    lat: 0,
    lon: 0,
  });
  const [icon, setIcon] = useState(clouds);

  const handleCheckWeather = () => {
    const key = 'bd4ea33ecf905116d12af172e008dbae';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=en&units=metric&appid=${key}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherData({
          name: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          description: data.weather[0].description,
          feels_like: data.main.feels_like,
          humidity: data.main.humidity,
          lat: data.coord.lat,
          lon: data.coord.lon,
        });

        // Set weather icon based on weather id
        const weatherId = data.weather[0].id;
        if (weatherId < 250) {
            setIcon(storm);
          } else if (weatherId < 350) {
            setIcon(drizzle);
          } else if (weatherId < 550) {
            setIcon(rain);
          } else if (weatherId < 650) {
            setIcon(snow);
          } else if (weatherId < 800) {
            setIcon(atmosphere);
          } else if (weatherId === 800) {
            setIcon(sun);
          } else if (weatherId > 800) {
            setIcon(clouds);
          }

        // Clear input fields after fetching data
        setCountry('');
        setCity('');
      })
      .catch((error) => console.error('Error fetching the weather data:', error));
  };


  return (
    <div id="container" className='border-2 text-white w-5/12 flex flex-col mx-auto px-5 py-7 rounded-xl'
        style={{backgroundImage: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(7,121,222,1) 0%, rgba(20,72,140,1) 90% )"}}
    >
      <div id="location" className='flex items-center justify-between'>
        <div className="">
          <input
            type="text"
            id="country"
            placeholder="Country"
            value={country}
            className='outline-none py-1 px-2 rounded border focus:border-2 focus:border-r0se text-black my-2'
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <div className="">
          <input
            type="text"
            id="city"
            placeholder="City"
            value={city}
            className='outline-none py-1 px-2 rounded border focus:border-2 focus:border-r0se text-black my-2'
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="py-2">
          <button onClick={handleCheckWeather}
            className='bg-red-500 text-white py-1 px-3 font-semibold rounded '
          >
            Go
          </button>
        </div>

      </div>

      <div className="flex flex-col">
        <div className="flex justify-center items-center py-5 ">
            <img src={icon} alt="Weather Icon" id="tempIcon" className='h-12 w-12 mr-3'/>
            <h2 id="weatherCountry" className='text-4xl font-semibold text-center'>
                {`${weatherData.name}`} 
            </h2>
        </div>
        {/* <div className="flex py-4 justify-center items-center">
        </div> */}
        <div className="flex justify-center items-center">
          <h2 id="weatherCountry" className='text-4xl font-bold font-sans text-yellow-400'>
            {`${weatherData.temp}°`}
          </h2>
        </div>
        
        <div className="py-6 px-10">
            <div className="features flex justify-between items-center text-lg font-semibold">
                <div className="">
                    <h2 id="weatherDescription">{weatherData.description}</h2>
                </div>
                <div className="">
                    <h2 id="feelsLike">{`Feels Like ${weatherData.feels_like}°C`}</h2>
                </div>
                <div className="">
                    <h2 id="humidity">{`Humidity ${weatherData.humidity}`}</h2>
                </div>
            </div>

            {/* <div className="flex justify-between items-center pt-2 px-16  text-lg font-semibold">
                <div className="">
                    <h2 id="longitude">{`Longitude ${weatherData.lon}`}</h2>
                </div>
                <div className="">
                    <h2 id="latitude">{`Latitude ${weatherData.lat}`}</h2>
                </div>
            </div> */}
        </div> 
      </div>
    </div>
  );
};

export default WeatherCard