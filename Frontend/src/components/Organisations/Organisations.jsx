import React, { useState, useEffect } from "react";
import organisations from "./organisation.api.js"; // Your JSON data

function Organisations() {
    // State to manage the input value and search results
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredCities, setFilteredCities] = useState([]);

    const defaultState = "Maharashtra"; 

    // Handle the search operation
    const handleSearch = () => {
        const filteredState = organisations.find(
            (org) => org.state.toLowerCase() === searchQuery.toLowerCase()
        );

        if (filteredState) {
            setFilteredCities(filteredState.cities);
        } else {
            setFilteredCities([]); // Clear if no match found
        }
    };

    // Clear the search and reset the cities list
    const handleClear = () => {
        setSearchQuery("");
        setFilteredCities([]);
    };

    useEffect(() => {
        setSearchQuery(defaultState);
        const filteredState = organisations.find(
            (org) => org.state.toLowerCase() === defaultState.toLowerCase()
        );
        if (filteredState) {
            setFilteredCities(filteredState.cities);
        }
    }, []); // Empty dependency array means it runs once on mount

    return (
        <div>
            <div className="flex justify-between px-16 pt-10 pb-14">
                <div className="">
                    <h1 className='text-center font-bold text-3xl text-rose-600  '>Drone Stations</h1>
                </div>

                <div className="flex">
                    <div className="">
                        <label className="input border-2 flex items-center gap-2 py-2 px-3 rounded-xl">
                            <input type="text" className="grow border-none focus:outline-none" placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="py-2 px-2">
                        <button className='  font-medium bg-blue-600 py-1 px-3 rounded-xl text-white'
                            onClick={handleSearch}>
                            Search
                        </button>
                        <button className='  font-medium bg-red-600 py-1 px-3 rounded-xl text-white'
                            onClick={handleClear}>
                            Clear
                        </button>
                    </div>
                </div>

            </div>

            <div className="">
                <div className="px-10">
                    {filteredCities.length > 0 ? (
                        <div className="">
                            <h3 className='text-center font-bold text-2xl  '>Cities in <span className="text-rose-600">{searchQuery}</span>  with Drone Stations:</h3>

                            <div className="city-list grid grid-cols-3 gap-14 py-16">
                                {filteredCities.map((city, index) => (
                                    <div key={index} className="city-card shadow-md shadow-blue-300 rounded-2xl py-4 px-4 grid gap-2"
                                        style={{backgroundImage: "radial-gradient( circle 1224px at 10.6% 8.8%,  rgba(255,255,255,1) 0%, rgba(153,202,251,1) 100.2% )"}}
                                    >
                                        <h4 className="text-center text-xl font-semibold   py-1">{city.city}</h4>
                                        {/* <p>Hospitals: {city.hospitals.length}</p> */}
                                        <p className="text-gray-700"><span className="text-black  ">Name:</span> <span className="font-semibold">{city.hospitals[0]?.name}</span></p>
                                        <p className="text-gray-700"><span className="text-black  ">Address:</span> {city.hospitals[0]?.address}</p>
                                        <p className="text-gray-700"><span className="text-black  ">Contact:</span> 098769 53511</p>
                                        <p className="text-gray-700"><span className="text-black  ">Map Link:</span> &nbsp;
                                            <a href="https://maps.google.com/?q=19.1051,72.8348"
                                               className="text-blue-900 underline">Click Here</a>
                                        </p>
                                        <div className="flex justify-center items-center py-2">
                                            <button className="text-rose-600 font-bold  ">View More</button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ) : (
                        searchQuery && <p>No cities found for "{searchQuery}".</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Organisations;

// import React, { useState } from "react";
// import organisations from "./organisation.api.js"; // Your JSON data

// const Organisations = () => {
//   // State to manage the input value and search results
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredCities, setFilteredCities] = useState([]);

//   // Handle the search operation
//   const handleSearch = () => {
//     const filteredState = organisations.find(
//       (org) => org.state.toLowerCase() === searchQuery.toLowerCase()
//     );

//     if (filteredState) {
//       setFilteredCities(filteredState.cities);
//     } else {
//       setFilteredCities([]); // Clear if no match found
//     }
//   };

//   // Clear the search and reset the cities list
//   const handleClear = () => {
//     setSearchQuery("");
//     setFilteredCities([]);
//   };

//   return (
//     <div className="organisations-page">
//       {/* Search Box */}
//       <div className="search-box">
//         <input
//           type="text"
//           placeholder="Search for State"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//         <button onClick={handleClear}>Clear</button>
//       </div>

//       {/* City Results */}
//       <div className="city-results">
//         {filteredCities.length > 0 ? (
//           <div>
//             <h3>Cities in {searchQuery} with Drone Stations:</h3>
//             <div className="city-list">
//               {filteredCities.map((city, index) => (
//                 <div key={index} className="city-card">
//                   <h4>{city.city}</h4>
//                   <p>Hospitals: {city.hospitals.length}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : (
//           searchQuery && <p>No cities found for "{searchQuery}".</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Organisations;