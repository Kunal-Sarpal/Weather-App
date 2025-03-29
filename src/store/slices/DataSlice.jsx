import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    msg: null,
    error:null
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        // it will fetch data from the API and store in state
        getData: (state, action) => {
            state.data = action.payload;
        },

        // It will display the interactive message on the screen
        setWeatherMessage: (state, action) => {
            state.msg = action.payload;
        },

        // it is used to display the error message on the screen
        setError: (state, action) => {
            state.error = action.payload;

        }

    }
});

export const { getData, setWeatherMessage,setError } = dataSlice.actions;

export default dataSlice.reducer;