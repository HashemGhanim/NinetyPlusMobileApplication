import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import colors from "../constants/Colors";
import {truncateText} from ".././utils/functions";
import {useNavigation} from "@react-navigation/native";

export default function ChatItem({item}) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity className="w-full relative py-10 " onPress={()=> navigation.navigate("chat", {avatar:item.image , receiverName:item.name, receiverId:item.id, userId:202011016})}>
            <Image
                source={{
                    uri: item.image,
                }}
                style={styles.item}
                className={"absolute right-2 top-2"}
            />
            <Text className={"absolute right-[72px] top-2 font-bold text-base"}>
                {item.name}
            </Text>
            {item.unread === 0 ? (
                <Text className="text-xs absolute right-[72px] top-9">
                    {truncateText(item.lastMessage)}
                </Text>
            ) : (
                <Text className="text-xs absolute right-[72px] top-9 font-semibold">
                    {item.lastMessage}
                </Text>
            )}
            <View className="absolute left-3 top-2 flex justify-center items-center">
                <Text className="font-normal text-[#989191]">{item.time}</Text>
            </View>
            {item.unread > 0 && (
                <View
                    className="w-5 h-5 bg-red-600 rounded-full absolute left-5 top-8 flex justify-center items-center"
                    style={{backgroundColor: colors.primary}}
                >
                    <Text className="text-white font-semibold text-xs w-full text-center">{item.unread}</Text>
                </View>
            )}
            <View className="h-[1px] w-96 bg-[#ccc] absolute left-0 bottom-0 rigth-[60px]"></View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    unreadMessage: {
        fontWeight: "semibold",
    },
    readMessage: {
        fontWeight: "normal",
    },
    item: {
        width: 50,
        height: 50,
        borderRadius: 50
    }
});