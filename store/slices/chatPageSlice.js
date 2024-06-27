import {createSlice} from "@reduxjs/toolkit";

export const NavigationBarSlice = createSlice({
    name: "navigationBar",
    initialState: {
        displayNavigationBar:false
    },
    reducers:{
       
    },
    extraReducers : (builder) => {
        return builder.addCase();
    }
})

export const {hideBar, displayBar} = NavigationBarSlice.actions;
export default NavigationBarSlice.reducer;