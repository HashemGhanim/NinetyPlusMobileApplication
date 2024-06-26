import {createSlice} from "@reduxjs/toolkit";

export const NavigationBarSlice = createSlice({
    name: "navigationBar",
    initialState: {
        displayNavigationBar:true
    },
    reducers:{
        hideBar: (state) => {
            state.displayNavigationBar = false
        },
        displayBar: (state) => {
            state.displayNavigationBar = true
        }
    }
})

export const {hideBar, displayBar} = NavigationBarSlice.actions;
export default NavigationBarSlice.reducer;