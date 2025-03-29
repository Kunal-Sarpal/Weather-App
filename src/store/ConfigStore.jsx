import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/DataSlice";

// In this file i have configure Redux store
export const store = configureStore({
    reducer:{
        data: dataReducer,
    }
})