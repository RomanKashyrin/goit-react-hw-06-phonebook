import { configureStore } from "@reduxjs/toolkit";
import sliceFilter from "./sliceFilter";


export const store = configureStore({
    reducer: {
        filter: sliceFilter.reducer,
    },
})