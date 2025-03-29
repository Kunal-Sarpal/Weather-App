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
        if (cityName.trim() === "" || cityName.length > 10 || invalidChars.test(cityName)) {
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
    },[visible])

    return (
        <div className="w-1/2 h-full p-2 flex flex-col items-center">
            <div className="flex relative scale-90 w-full">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name..."
                    className="w-full text-md border p-3 outline-none border-zinc-300 shadow rounded-md px-6 text-zinc-600"
                />
                <button
                    onClick={() => filterResponse(city)}
                    className="border bg-zinc-700 text-md text-white active:scale-110 duration-150 ease-in-out border-zinc-300 absolute right-0 h-full rounded-r-xl px-6"
                >
                    Search
                </button>
            </div>

            {visible && <ErrorMsg msg={"Invalid city name"}/>}


            <div className="text-3xl mt-2 text-zinc-800 tracking-tight font-extrabold px-8">
                {msg && msg}
            </div>

            <div className="mt-4 w-full">
                <h2 className="text-lg font-semibold text-blue-500  pl-8 ">Recent Searches</h2>
                    <div className="flex flex-wrap scale-75 gap-2">
                    {recentData.map((data, index) => (
                        <Card key={index} name={data.city} value={data.weather.main.temp} symbol={"°C"} icon={data.weather.weather[0].icon} />
                        ))}
                    </div>
            </div>
        </div>
    );
};

export default RightCard;
