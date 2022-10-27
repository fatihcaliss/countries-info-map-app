import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState,ICountry } from "../types/interface";

const initialState: IState = {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    country: [],
    isLoading: false,
    error: "",
}

export const getCountry = createAsyncThunk(
    'country/getCountry', async (countryName:string) => {

        const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        console.log(res)
        return res.ok ? res.json() : res.ok;

    }
)

const countrySlice = createSlice({
    name:"countryData",
    initialState,
    reducers:{

    },
    extraReducers(builder:any) {
        builder.addCase(getCountry.pending,(state:IState)=>{
            state.isLoading = true;
        })
        builder.addCase(getCountry.fulfilled,(state:IState, action:PayloadAction<ICountry[]>)=>{
            state.isLoading = false;
            state.country = action.payload
        })
        builder.addCase(getCountry.rejected,(state:IState)=>{
            state.error = "Invalid Entry"
        })
    },
})

export default countrySlice.reducer