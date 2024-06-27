import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import userService from "../../service/userService";
import { logg, removeItemFromAsyncStorage, setItemToAsyncStorage } from "../../utils/functions";

export const login = createAsyncThunk('user/login', async(data, thunkApi) => {
    try{
        const t =  await userService.login(data.email, data.password);
        await setItemToAsyncStorage('user', JSON.stringify(t));
        return t
    }
    catch(e) {
        const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
        return thunkApi.rejectWithValue(message);
    }
})

export const logout = createAsyncThunk('user/logout', async(data, thunkApi) => {
    try{
        const t =  await userService.logout(thunkApi.getState().user.user.access_token);
        
        return t;
    }
    catch(e) {
        const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
        return thunkApi.rejectWithValue(message);
    }
})



export const userSlice = createSlice({
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
       },
       reset: (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = false;
        state.errorMessage = '';
       }
    },
    extraReducers: (builder) => {

        // pending
        builder.addCase(login.pending, (state, action) => {
            state.isLoading = true;
            logg('userSlice', 'log in is loading', '');
        })
        .addCase(logout.pending, (state, action) => {
           // state.isLoading = true;
            logg('userSlice', 'log out is loading', '');
        })

        //fullfielled
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
            state.isSuccess = true;
            logg('userSlice', 'log in is success -> ' + action.payload, 'action.payload');
        })
        .addCase(logout.fulfilled, (state, action) => {
            state.user = null;
            state.isLoading = false;
            state.isSuccess = true;
            logg('userSlice', 'logout is success', '');
        })

        //rejected
        .addCase(login.rejected, (state, action) => {
            
            if(action.payload === 'messages.error.login')
            state.errorMessage = 'check your password and email';

            logg('userSlice', 'log in is error -> ' + state.errorMessage, 'state.errorMessage');

            state.isLoading = false;
            state.isError = true;
        })
        .addCase(logout.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = 'something went wrong'
            logg('userSlice', 'log in is error -> ' + action.payload, 'state.errorMessage');
        })
    }
})

export const {setUser, reset} = userSlice.actions;

export default userSlice.reducer;