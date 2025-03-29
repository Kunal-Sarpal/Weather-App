import { keys } from "../../apiKeys";
import { getData,setError,setWeatherMessage } from "../slices/DataSlice";
import { getWeatherMessage } from "../../utils/WeatherDescriptions";
import axios from "axios";


// this function is used to dispatch the action to get the data from the api

// Basically this algorithm is to check if the city already exists in the local storage. If it does, it will not add it again. If it doesn't, it will add it to the local storage.

// And if size will greater than 5 then it will remove the first element from the array and add the new element at the end of the array.

// Basically it is working like a queue dataStructure.

export const asyncGetData = (city) => async (dispatch) => {
    try {
        console.log("in asyncGetData")
        const response = await axios.get(`${keys.base}?q=${city}&appid=${keys.key}&units=metric`);
        dispatch(getData(response.data));
        const getMsg = getWeatherMessage(response.data.weather[0].main)
        dispatch(setWeatherMessage(getMsg))


        
        const newEntry = { city, weather: response.data };
        let storedSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
        const cityExists = storedSearches.some((entry) => entry.city === city);
        if (!cityExists) {
            if (storedSearches.length >= 5) {
                storedSearches.shift(); 
            }
            storedSearches.push(newEntry); 
            localStorage.setItem("recentSearches", JSON.stringify(storedSearches));
        }

    } catch (error) {
        dispatch(setError(error.message || "An error occurred while fetching the weather data."));
    }
};
