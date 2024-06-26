import {configureStore} from '@reduxjs/toolkit';
import navigationBarReducer from "./slices/NavigationBarSlice";

const store = configureStore({
    reducer: {
        navigationBar: navigationBarReducer
    }
});


export default store;
