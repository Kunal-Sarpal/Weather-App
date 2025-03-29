import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/DataSlice";

export const store = configureStore({
    reducer:{
        data: dataReducer,
    }
})