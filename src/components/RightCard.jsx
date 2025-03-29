import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetData } from "../store/actions/getData";
import Card from "./Card"; 
import ErrorMsg from "./ErrorMsg";

const RightCard = () => {
    const [city, setCity] = useState("Delhi");
    const [visible, setVisible] = useState(false);
    const [recentData, setRecentData] = useState([]);
    const dispatch = useDispatch();
    const msg = useSelector((state) => state.data.msg);

 

    function filterResponse(cityName) {
        const invalidChars = /[0-9]/;
        if (cityName.trim() === "" || cityName.length > 10 || invalidChars.test(cityName) || cityName[0] == cityName[1]) {
            setVisible(true);
        } else {
            setVisible(false);
            setCity(cityName);
            dispatch(asyncGetData(cityName));
        }
    }

    useEffect(() => {
        const prevdata = localStorage.getItem('recentSearches')
        const convertedData = JSON.parse(prevdata);
        setRecentData(convertedData);
    },[city])

    return (
        <div className="lg:w-1/2  h-full lg:p-2 flex flex-col items-center">
            {/*  This is navbar  */}
            <div className="flex relative scale-90 w-full mt-10 md:mt-0">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name..."
                    className="w-full hover:outline outline-0 hover:outline-blue-500  accent-violet-300 text-md border p-3 font-normal  border-zinc-300  rounded-md px-6 text-zinc-600"
                />
                <button
                    onClick={() => filterResponse(city)}
                    className="border bg-zinc-700 text-md text-white active:scale-110 duration-150 ease-in-out border-zinc-300 absolute right-0 h-full rounded-r-md px-6"
                >
                    Search
                </button>
            </div>

            {/* Before sending request to api we will filter the input */}
            {visible && <ErrorMsg msg={"Invalid city name"}/>}


            {/* Interactive message will be shown here */}
            <div className="text-3xl mt-2 text-zinc-800 tracking-tight font-extrabold px-8">
                {msg && msg}
            </div>


            {/* Past serached cities. */}
            <div className="mt-4 w-full">
                <h2 className="text-lg font-semibold text-blue-500  pl-8 ">Recent Searches</h2>
                    <div className="flex flex-wrap scale-75 w-fit">
                    {recentData.map((data, index) => (
                        <Card key={index} name={data.city} value={data.weather.main.temp} symbol={"°C"} icon={data.weather.weather[0].icon} />
                        ))}
                    </div>
            </div>
        </div>
    );
};

export default RightCard;
