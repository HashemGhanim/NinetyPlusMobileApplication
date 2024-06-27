import {configureStore} from '@reduxjs/toolkit';
import navigationBarReducer from "./slices/NavigationBarSlice";
import userSlice from './slices/userSlice';
import  notificationSlice  from './slices/notificationSlice';
import chatsSlice from './slices/chatsSlice';

const store = configureStore({
    reducer: {
        navigationBar: navigationBarReducer,
        user: userSlice,
        notification: notificationSlice,
        chats: chatsSlice
    }
});


export default store;
