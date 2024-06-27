import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import LoginPage from "./screens/LoginPage";
import Home from "./screens/Home";
import Chats from "./screens/Chats";
import Notifications from "./screens/Notifications";
import AddContact from "./screens/AddContact";
import CustomNavigationBar from "./components/CustomNavigationBar";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useDispatch, useSelector} from "react-redux";
import ChatPage from "./screens/ChatPage";
import Menu from "./screens/Menu";
import { getItemFromAsyncStorage } from './utils/functions';
import { setUser } from './store/slices/userSlice';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {

    const dispatch = useDispatch();
    const isBarDisplayed = useSelector((state)=> state.navigationBar.displayNavigationBar);
    const checkUser = async() => {
        const user = await getItemFromAsyncStorage('user');
        dispatch(setUser(user))
    }
    checkUser()
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false}}
                initialRouteName="login">
                <Stack.Screen name="login" component={LoginPage} />
                <Stack.Screen name="home" component={Home}/>
                <Stack.Screen name="chats" component={Chats}/>
                <Stack.Screen name="notifications" component={Notifications}/>
                <Stack.Screen name="addContact" component={AddContact}/>
                <Stack.Screen name="chat" component={ChatPage}/>
                <Stack.Screen name="menu" component={Menu}/>
            </Stack.Navigator>
            {isBarDisplayed && <CustomNavigationBar/>}
        </NavigationContainer>
    );
}
