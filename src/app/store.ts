import { configureStore } from "@reduxjs/toolkit";
import countySlice from "../features/countySlice";


export const store = configureStore({
    reducer: {
        country : countySlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch