import {MAX_LENGTH_OF_MESSAGE} from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { setUpTests } from "react-native-reanimated";

const truncateText = (text) => {
    const maxLength = Number(MAX_LENGTH_OF_MESSAGE);
    if (text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength) + '....';
};

export const NINETY_PLUS_CENTRAL = axios.create({
    baseURL: "http://192.168.1.14:80/api/v1/",
    responseType: "json",
  });
  

  export const REAL_TIME_COMUNICATION_SERVICE = axios.create({
    baseURL: "https://scme-messenger-d3548dfe4f29.herokuapp.com/api/v1",
    responseType: "json",
  });
  
  export const getItemFromAsyncStorage = async (item) => {
    return (await AsyncStorage.getItem(item)) ? AsyncStorage.getItem(item) : null;
  };
  
  export const setItemToAsyncStorage = async (item, value) => {
    return await AsyncStorage.setItem(item, value);
  };

  export const removeItemFromAsyncStorage = async (item) => {
    return (await AsyncStorage.removeItem(item));
  };
  
  


export  {
    truncateText,
};