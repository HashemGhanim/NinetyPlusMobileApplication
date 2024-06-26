import {View, SafeAreaView, Text, TouchableOpacity, FlatList, Image} from "react-native";
import colors from "../constants/Colors";
import Icon from "react-native-vector-icons/Ionicons";
import React, {useEffect, useState} from "react";
import uuid from "react-native-uuid";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {hideBar} from "../store/slices/NavigationBarSlice";


const isToday = (someDate) => {
    const today = new Date();
    return someDate.getDate() === today.getDate() &&
        someDate.getMonth() === today.getMonth() &&
        someDate.getFullYear() === today.getFullYear();
}

const formatDate = (date) => {
    if (isToday(date)) {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
        return date.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' });
    }
}


const NotificationItem  = ({item}) => {
    return(
        <View className={`flex-row items-center py-4 px-2 bg-gray-200 my-[2px]`}>
            <View className="w-[15%]">
                <Image source={{
                    uri: `${item.avatar}`
                }} className={"w-14 h-14 rounded-full"}/>
            </View>
            <View className={"w-[85%] flex-row items-center"}>
                <Text className={"pt-1"}>{item.text}</Text>
            </View>
            <Text className={"absolute top-3 right-2"}>{formatDate(item.time)}</Text>
        </View>
    );
}
export default function Notifications() {
    const [filterOpen, setFilterOpen] = useState(false);
    const [notifications, setNotifications] = useState([
        {
            id: uuid.v4(),
            text: "Mr. هاشم زرعي is active now, you can message him 😄",
            time: new Date(),
            avatar: "https://via.placeholder.com/150",
        },
        {
            id: uuid.v4(),
            text: "This course رياضيات عامة is live now, here we go 🏃",
            time: new Date(Date.now() - 3600000),
            avatar: "https://www.open.edu.au/-/media/blog/2023/03-march/careers-in-maths.jpg?rev=47f96a32d6b4449993d9b33e5d8e7f05&hash=C00D7E19159818C2FDAFB8D1FA8C2281",
        },
        {
            id: uuid.v4(),
            text: "New message from John",
            time: new Date("2024-06-23"), // 2 hours ago
            avatar: "https://via.placeholder.com/150",
        }
    ]);

    const sortedNotifications = notifications.sort((a, b) => b.time - a.time);
    return (
        <SafeAreaView className="w-full h-full">
            <View className="w-full">
                <View className="flex-row mt-4 justify-between items-center mb-4 mx-5">
                    <View>
                        <Text className="font-bold text-[25px] pb-1">Notifications</Text>
                    </View>
                    <TouchableOpacity
                        className="w-[34] h-[34] rounded-full flex justify-center items-center"
                        style={{backgroundColor: colors.primary}}>
                        <Icon name={"filter"} size={17} color="white"/>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList data={sortedNotifications}
                      keyExtractor={(item) => item.id}
                      renderItem={({item})=>(
                            <NotificationItem item={item}/>
                      )}
                      className="w-full h-full mt-5"
            />
        </SafeAreaView>
    );
}
