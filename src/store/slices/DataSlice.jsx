import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    msg: null
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        getData: (state, action) => {
            state.data = action.payload;
        },
        setWeatherMessage: (state, action) => {
            state.msg = action.payload;
        }

    }
});

export const { getData, setWeatherMessage } = dataSlice.actions;

export default dataSlice.reducer;