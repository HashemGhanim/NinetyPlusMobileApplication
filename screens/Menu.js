import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Dimensions, Image, ScrollView, TouchableOpacity} from "react-native";
import colors from "../constants/Colors";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import { removeItemFromAsyncStorage } from '../utils/functions';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/userSlice';
import { hideBar } from '../store/slices/NavigationBarSlice';


const screenDimensions = Dimensions.get("screen");

function Menu() {
    const [windowWidth, setWindowWidth] = useState(screenDimensions.width);
    const [left, setLeft] = useState(-(windowWidth * 1.5/2) + screenDimensions.width/2);
    const dispatch = useDispatch();
    const navigator = useNavigation()
    const {user} = useSelector(state => state.user);
    console.log(user && user);
    useEffect(() => {
        setWindowWidth(screenDimensions.width);
        setLeft(-(windowWidth * 1.5/2) + screenDimensions.width/2);
    }, []);

    
    const onLogoutHandler = async () => {
        await removeItemFromAsyncStorage('user');   
        navigator.navigate('login')
        dispatch(hideBar());
    }


    return (
    <SafeAreaView className="h-full w-full">
                <View className={`rounded-full absolute  left-0 flex justify-end items-center z-10`}
                      style={{width:windowWidth*1.5, height:windowWidth*1.5, top:-windowWidth*1.8/2, left:left, backgroundColor:colors.primary}}>
                    <View>
                        {user && <Image source={{
                            uri:`${user.user.profile_image}`
                        }}
                               className="rounded-full w-40 h-40 top-16 border-[6px] border-[#fff]"
                        />}
                    </View>
                </View>
                <ScrollView className={"mt-[270px] mb-[70px]"}>
                    <View className={` mx-auto w-full`}>
                        <View className={`mx-auto`}>
                            <Text className={"font-semibold text-xl"}>{user && user.user.first_name} {user && user.user.last_name}</Text>
                        </View>
                        <View className={"mt-[10px] w-full flex-row justify-center"}>
                            <View className={`h-[30px] px-8 mx-0.5 rounded-full bg-[#edd264] flex items-center justify-center`}>
                                <Text className={"font-large text-black"}>أستاذ</Text>
                            </View>
                            
                        </View>
                    </View>
                    <View className={"w-[95%] mt-5 mx-auto bg-white rounded-[8px]"}>
                        <View className={"w-full flex-row justify-center items-center my-4"}>
                            <View className={"w-[90%] flex items-end "}>
                                <Text>hashemzerei45</Text>
                            </View>
                            <View className={"w-[10%] flex justify-center items-center"}>
                                <Feather name={"at-sign"} size={18} />
                            </View>
                        </View>
                        <View className={"w-full flex-row justify-center items-center my-4"}>
                            <View className={"w-[90%] flex items-end "}>
                                <Text>{user.user.email}</Text>
                            </View>
                            <View className={"w-[10%] flex justify-center items-center"}>
                                <MaterialCommunityIcons name={"email-outline"} size={18} />
                            </View>
                        </View>
                        <View className={"w-full flex-row justify-center items-center my-4"}>
                            <View className={"w-[90%] flex items-end "}>
                                <Text>{user.user.phone}</Text>
                            </View>
                            <View className={"w-[10%] flex justify-center items-center"}>
                                <FontAwesome name={"mobile"} size={18} />
                            </View>
                        </View>
                    </View>
                    <View className={"bg-white w-[95%] mt-5 mx-auto rounded-[8px]"}>
                        <View className={"p-4 flex-row"}>
                            <View className={"w-[80%] flex items-end px-4"}>
                                <Text className={"font-bold text-lg"}>7</Text>
                                <Text className={"font-medium text-lg text-gray-500"}>الدورات الكلية</Text>
                            </View>
                            <View className={"p-5 bg-orange-100 flex justify-center items-center w-[20%] rounded "}>
                                <FontAwesome5 name={"layer-group"} size={20} color={colors.primary}/>
                            </View>
                        </View>
                    </View>
                    <View className={"bg-white w-[95%] mt-5 mx-auto rounded-[8px]"}>
                        <View className={"p-4 flex-row"}>
                            <View className={"w-[80%] flex items-end px-4"}>
                                <Text className={"font-bold text-lg"}>4</Text>
                                <Text className={"font-medium text-lg text-gray-500"}>الدورات الحالية</Text>
                            </View>
                            <View className={"p-5 bg-blue-100 flex justify-center items-center w-[20%] rounded "}>
                                <FontAwesome5 name={"wallet"} size={20} color={"blue"}/>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity className={"w-[95%] mt-5 mx-auto rounded-[8px] flex-row justify-center items-center bg-blue-500"}>
                        <Text className={"font-medium p-3.5 text-white text-base"}>
                            أعدادات الحساب
                        </Text>
                        <AntDesign name={"setting"} size={30} color={"white"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onLogoutHandler} className={"w-[95%] mt-5 mx-auto rounded-[8px] flex-row justify-center items-center bg-red-500"}>
                        <Text className={"font-medium p-3 text-white text-base"}>
                            تسجيل الخروج
                        </Text>
                        <Feather name={"log-out"} size={25} color={"white"} />
                    </TouchableOpacity>
                </ScrollView>
    </SafeAreaView>
    );
}

export default Menu;