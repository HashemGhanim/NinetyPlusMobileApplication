import {configureStore} from '@reduxjs/toolkit';
import navigationBarReducer from "./slices/NavigationBarSlice";
import userSlice from './slices/userSlice';

const store = configureStore({
    reducer: {
        navigationBar: navigationBarReducer,
        user: userSlice
    }
});


export default store;
