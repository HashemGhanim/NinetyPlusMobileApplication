import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import LoginPage from "./screens/LoginPage";
import Home from "./screens/Home";
import Chats from "./screens/Chats";
import Notifications from "./screens/Notifications";
import AddContact from "./screens/AddContact";
import CustomNavigationBar from "./components/CustomNavigationBar";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useSelector} from "react-redux";
import ChatPage from "./screens/ChatPage";
import Menu from "./screens/Menu";

const Stack = createNativeStackNavigator();

export default function MainNavigator() {

    const isBarDisplayed = useSelector((state)=> state.navigationBar.displayNavigationBar);

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false}}
                initialRouteName="home">
                <Stack.Screen name="login" component={LoginPage}/>
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
