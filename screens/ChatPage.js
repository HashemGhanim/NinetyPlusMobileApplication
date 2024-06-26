import React, {useState, useCallback, useEffect, useRef} from 'react'
import {Bubble, GiftedChat, Send, Time} from "react-native-gifted-chat";
import {useDispatch} from "react-redux";
import {displayBar, hideBar} from "../store/slices/NavigationBarSlice";
import {Text, TouchableOpacity, View, Image, StyleSheet} from "react-native";
import Feather from "react-native-vector-icons/Feather"
import colors from "../constants/Colors";
import uuid from 'react-native-uuid';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {useNavigation} from "@react-navigation/native";
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet';


const MoreComponent = ({thereIsMessages, notifyMe})=>{
    return(
        <View className="h-fit w-[240px] rounded-[6px] bg-[#EDEDED] shadow-2xl absolute z-10 top-[95px] right-7">
            <TouchableOpacity disabled={!thereIsMessages} className="flex-row justify-evenly items-center py-4 border-b-[0.5px] border-[#ccc]">
                <Text className={"font-medium text-[#FF0000] w-[80%]"}>
                    Delete chat
                </Text>
                <MaterialIcons name={"delete"} color={"#FF0000"} size={20} />
            </TouchableOpacity>
            {
                notifyMe ?
                    <TouchableOpacity className="flex-row justify-evenly items-center py-4">
                        <Text className={"font-medium w-[80%] text-[#444]"}>
                            Disable notification
                        </Text>
                        <MaterialIcons name={"notifications-off"} color={"#444"} size={20} />
                    </TouchableOpacity>:
                <TouchableOpacity className="flex-row justify-evenly items-center py-4">
                    <Text className={"font-medium w-[80%] text-[#444]"}>
                        Notify me when user active
                    </Text>
                    <MaterialIcons name={"notifications-on"} color={"#444"} size={20} />
                </TouchableOpacity>
            }
        </View>
    );
}

function ChatPage({route}) {
    const [isMoreDisabled, setIsMoreDisabled] = useState(false);
    const {avatar, receiverName, receiverId, userId} = route.params;
    const [messages, setMessages] = useState([])
    const dispatch = useDispatch();
    const navigation = useNavigation();

    //{senderId, receiverId}
    useEffect(() => {
        dispatch(hideBar());
    }, []);

    useEffect(() => {
        setMessages([]);
    }, [])

    const actionSheetRef = useRef();

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        )
    }, [])

    const showActionSheet = (message) => {
        actionSheetRef.current.show();
        actionSheetRef.current.messageToDelete = message;
    };

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View>
                    <Feather name={"send"} style={{marginBottom: 10, marginRight: 15}} size={25}
                             color={`${colors.primary}`}/>
                </View>
            </Send>
        );
    }

    const renderTime = (props) => {
        return (
            <Time
                {...props}
                timeTextStyle={{
                    left: styles.timeText,
                    right: styles.timeText,
                }}
            />
        );
    };

    const renderBubble = (props) => {
        return (
            <Bubble {...props}
                    onLongPress={() => showActionSheet(props.currentMessage)}
                    wrapperStyle={{
                        left: {
                            backgroundColor: '#034F84'
                        },
                        right: {
                            backgroundColor: colors.primary
                        }
                    }}
                    textStyle={{
                        left: {
                            color: "#fff"
                        },
                        right: {
                            color: "#fff"
                        }
                    }}

                    renderTime={renderTime}
            />
        );
    }
    const messageIdGenerator = () => {
        return uuid.v4();
    };

    const backButtonHandler = () => {
        navigation.navigate("chats");
        dispatch(displayBar());
    }
    const handleActionPress = (index) => {
        if (index === 0) {
            const messageToDelete = actionSheetRef.current.messageToDelete;
            setMessages(previousMessages => previousMessages.filter(msg => msg._id !== messageToDelete._id));
        }
    };

    return (
        <View className="h-full">
            {
                isMoreDisabled && <MoreComponent notifyMe={false} thereIsMessages={messages.length > 0}/>
            }
            <View className="w-full h-[14%] bg-white flex-row justify-start items-center">
                <View className="w-[88%] flex-row justify-start items-center mt-2">
                    <TouchableOpacity onPress={backButtonHandler} className="ml-9 mr-4 mt-7">
                        <MaterialIcons name="arrow-back-ios" size={30}/>
                    </TouchableOpacity>

                    <View className="py-10 mt-7 flex-row">
                        <View className="w-14 h-14 bg-[#ccc] rounded-full">
                            <Image source={{
                                uri: `${avatar}`,
                            }} className={"w-full h-full rounded-full"}/>
                        </View>
                        <View className={"mt-4 ml-3 h-full flex justify-center "}>
                            <View className={"flex justify-center items-center h-7"}>
                                <Text className={"font-semibold text-lg"}>{receiverName}</Text>
                            </View>
                            <View className={"flex-row items-center pl-1.5 h-4"}>
                                <View className={"h-2 w-2 rounded-full bg-green-600"}></View>
                                <Text className={"pl-2"}>active</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="h-full flex justify-center items-center justify-self-end">
                    <TouchableOpacity onPress={()=> setIsMoreDisabled(!isMoreDisabled)}>
                        <Feather name={"more-horizontal"} size={24} color={"black"} style={{marginTop:28}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="w-full h-[86%] pb-8">
                <GiftedChat
                    messages={messages}
                    onSend={messages => onSend(messages)}
                    user={{
                        _id: userId,
                    }}
                    alwaysShowSend={true}
                    renderSend={renderSend}
                    messageIdGenerator={messageIdGenerator}
                    renderBubble={renderBubble}

                />
                <ActionSheet
                    ref={actionSheetRef}
                    options={['Delete Message', 'Cancel']}
                    cancelButtonIndex={1}
                    destructiveButtonIndex={0}
                    onPress={(index) => handleActionPress(index)}
                    style={{backgroundColor:"#000", bottom:50}}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    timeText: {
        color: '#fff', // Set the time text color to white
    },
})

export default ChatPage;

