import {MAX_LENGTH_OF_MESSAGE} from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { setUpTests } from "react-native-reanimated";
import * as Notifications from 'expo-notifications';
const truncateText = (text) => {
    const maxLength = Number(MAX_LENGTH_OF_MESSAGE);
    if (text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength) + '....';
};

export const NINETY_PLUS_CENTRAL =  axios.create({
    baseURL: "http://192.168.1.22:80/api/v1",
    responseType: "json",
  });
 

  export const REAL_TIME_COMUNICATION_SERVICE = axios.create({
    baseURL: "http://localhost:8088/api/v1/comm",
    responseType: "json",
  });
  
  export const getItemFromAsyncStorage = async (item) => {
    return (await AsyncStorage.getItem(item)) ? JSON.parse(await AsyncStorage.getItem(item)) : null;
  };
  
  export const setItemToAsyncStorage = async (item, value) => {
    return await AsyncStorage.setItem(item, value);
  };

  export const removeItemFromAsyncStorage = async (item) => {
    return (await AsyncStorage.removeItem(item));
  };
  
  export const logg = (place, text, name) => {
    console.log('this is ' + name + ' in ' + place + ': ' + text);
    console.log('----------------------------------------------------------------------------------------------------------')
  }


  function requestUserPermission() {
   
  }

export  {
    truncateText,
};