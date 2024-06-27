import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import colors from "../constants/Colors";
import Icon from "react-native-vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import uuid from "react-native-uuid";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { hideBar } from "../store/slices/NavigationBarSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotifications } from "../store/slices/notificationSlice";

const isToday = (someDate) => {
  someDate = new Date(someDate);
  const today = new Date();
  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};

const formatDate = (date) => {
  if (isToday(date)) {
    return new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  } else {
    return new Date(date).toLocaleDateString([], {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }
};

const NotificationItem = ({ item }) => {
  return (
    <View className={`flex-row items-center py-4 px-2 bg-gray-200 my-[2px]`}>
      <View className="w-[15%]">
        <Image
          source={{
            uri: `${item.avatar}`,
          }}
          className={"w-14 h-14 rounded-full"}
        />
      </View>
      <View className={"w-[85%] flex-row items-center"}>
        <Text className={"pt-1"}>{item.text}</Text>
      </View>
      <Text className={"absolute top-3 right-2"}>{formatDate(item.time)}</Text>
    </View>
  );
};
export default function Notifications() {
  const [filterOpen, setFilterOpen] = useState(false);
  const { isLoading, notifications } = useSelector(
    (state) => state.notification
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNotifications());
  }, []);

  if (!notifications) {
    return (
      <View className={"flex justify-center items-center w-full mt-5 h-1/2"}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
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
            style={{ backgroundColor: colors.primary }}
          >
            <Icon name={"filter"} size={17} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={sortedNotifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
        className="w-full h-full mt-5"
      />
    </SafeAreaView>
  );
}
