import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import userService from "../../service/userService";
import { setItemToAsyncStorage } from "../../utils/functions";

export const login = createAsyncThunk('user/login', async(data, thunkApi) => {
    try{
        const t =  await userService.login(data.email, data.password);
        await setItemToAsyncStorage('user', JSON.stringify(t));
        return t
    }
    catch(e) {
        return thunkApi.rejectWithValue(e.response.data.message);
    }
})



export const NavigationBarSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        isSuccess : false,
        isError : false,
        isLoading : false,
        errorMessage: null
    },
    reducers:{
       setUser: (state, action) => {
        state.user = action.payload;
       }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.isLoading = true;
            console.log('log in is loading')
        })
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
            state.isSuccess = true;
            console.log('log in success', action.payload)
        })
        .addCase(login.rejected, (state, action) => {
            
            if(action.payload === 'messages.error.login')
            state.errorMessage = 'check your password and email';
            console.log('log in error', state.errorMessage)
            state.isError = true;
        })
    }
})

export const {setUser} = NavigationBarSlice.actions;

export default NavigationBarSlice.reducer;