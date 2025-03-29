// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { keys } from './apiKeys';

// const App = () => {
//  ; // Store weather data as an object (not an array)

//   // Function to fetch weather data from OpenWeather API
 


//   // Function to convert UNIX timestamp to readable date
//   const convertTimestamp = (timestamp) => {
//     return new Date(timestamp * 1000).toLocaleString();
//   };

//   return (
//     <>

//       <div className='bg-red-300 p-4 rounded-lg shadow-lg'>
//       kua
//       </div>
//       <button onClick={fetchData}>Fetch Weather</button>
//       {data && (
//         <>
//           <div>
//             <p>Clouds: {data.clouds.all}%</p>
//             <p>Longitude: {data.coord.lon}</p>
//             <p>Latitude: {data.coord.lat}</p>
//             <p>Date & Time: {convertTimestamp(data.dt)}</p>
//             <p>Weather ID: {data.id}</p>
//             <p>Feels Like: {data.main.feels_like}°C</p>
//             <p>Humidity: {data.main.humidity}%</p>
//             <p>Temperature: {data.main.temp}°C</p>
//             <p>Max Temp: {data.main.temp_max}°C</p>
//             <p>Min Temp: {data.main.temp_min}°C</p>
//           </div>
//           <div>
//             <p>Timezone Offset (seconds): {data.timezone}</p>
//           </div>
//           <div>
//             <img
//               src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
//               alt={data.weather[0].description}
//             />
//           </div>
//           <div>
//             <p>Weather: {data.weather[0].main}</p>
//             <p>Description: {data.weather[0].description}</p>
//           </div>
//           <div>
//             <p>Wind Speed: {data.wind.speed} m/s</p>
//             <p>Wind Gust: {data.wind.gust || 'N/A'} m/s</p>
//             <p>Wind Direction: {data.wind.deg}°</p>
//           </div>
//           <div>
//             <p>Country: {data.sys.country}</p>
//             <p>Base: {data.base}</p>
//             <p>City Name: {data.name}</p>
//             <p>Sunrise: {convertTimestamp(data.sys.sunrise)}</p>
//             <p>Sunset: {convertTimestamp(data.sys.sunset)}</p>
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default App;
