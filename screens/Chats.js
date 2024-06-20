import {
    View,
    SafeAreaView,
    Text,
    TextInput,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    RefreshControl, TouchableWithoutFeedback, Keyboard,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import colors from "../constants/Colors";
import filter from "lodash.filter";
import {useEffect, useState} from "react";
import ChatItem from "../components/ChatItem";

const EmptyInbox = ({isIndicator}) => {
    return (
        <View className={"flex justify-center items-center w-full mt-5 h-1/2"}>
            {
                isIndicator ?
                    <ActivityIndicator size={"large"}/>
                    :
                    <>
                        <Octicons name="inbox" size={120} color={`${colors.secondaryGray}`}/>
                        <Text className={`text-[${colors.gray}] font-normal`}>Your inbox is clear. Start a new
                            conversation now!</Text>
                    </>
            }
        </View>
    );
}


export default function Chats() {
    const [data, setData] = useState([]);
    const [fullData, setFullData] = useState(null);
    const [isRefresh, setIsRefresh] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isEmpty, setIsEmpty] = useState(false);


    useEffect(() => {
        const listOfData = [
            {
                "id": "6671c5453dbccf4888b27e76",
                "image": "https://randomuser.me/api/portraits/men/1.jpg",
                "name": "هاشم زرعي",
                "unread": 0,
                "time": "06:02 AM",
                "lastMessage": "مرحباً، كيف حالك؟ انا هاشم زرعي طالب هندسة حاسوب في جامعة خضوري طولكرم احب البرمجو كثيرا"
            },
            {
                "id": "6671c545767fa879ea2682b8",
                "image": "https://randomuser.me/api/portraits/women/1.jpg",
                "name": "نسرين الرمزي",
                "unread": 4,
                "time": "04:22 AM",
                "lastMessage": "لا تنسى اجتماعنا."
            },
            {
                "id": "6671c54537460a706939febd",
                "image": "https://randomuser.me/api/portraits/men/2.jpg",
                "name": "بكر فاريل",
                "unread": 2,
                "time": "11:26 AM",
                "lastMessage": "هل يمكنك إرسال التقرير لي؟"
            },
            {
                "id": "6671c54552f3a9d1994cc6f2",
                "image": "https://randomuser.me/api/portraits/women/2.jpg",
                "name": "تيريزا فرانكو",
                "unread": 0,
                "time": "02:51 AM",
                "lastMessage": "عمل رائع في المشروع!"
            },
            {
                "id": "6671c5451220220aacb0b106",
                "image": "https://randomuser.me/api/portraits/men/3.jpg",
                "name": "يورك بارلو",
                "unread": 1,
                "time": "07:49 PM",
                "lastMessage": "سأتصل بك لاحقاً."
            },
            {
                "id": "6671c545bddfee0cf04fe28c",
                "image": "https://randomuser.me/api/portraits/women/3.jpg",
                "name": "أدلا بايج",
                "unread": 3,
                "time": "09:06 PM",
                "lastMessage": "عيد ميلاد سعيد!"
            },
            {
                "id": "6671c545e5b29e28c846c8f5",
                "image": "https://randomuser.me/api/portraits/men/4.jpg",
                "name": "بكستر سميث",
                "unread": 1,
                "time": "04:57 AM",
                "lastMessage": "أراك غداً."
            },
            {
                "id": "6671c54546c8d5cecd339693",
                "image": "https://randomuser.me/api/portraits/women/4.jpg",
                "name": "روزاليندا ليفين",
                "unread": 4,
                "time": "08:47 AM",
                "lastMessage": "دعنا نتناول الغداء."
            }
        ];
        setTimeout(() => {
            setFullData(listOfData);
            setData(listOfData);
        }, 2000);
    }, []);

    const refreshHandler = () => {
        setIsRefresh(true);

        setTimeout(() => {
            setIsRefresh(false);
        }, 2000);
    };

    const searchHandler = (query) => {
        setSearchQuery(query);
        const formattedQuery = query.toLowerCase();
        const filteredData = filter(fullData, (user) => {
            return contains(user, formattedQuery);
        });
        setData(filteredData);
    };

    const contains = ({name}, query) => {
        return name.includes(query);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView className="flex justify-center items-center mt-4">
                <View className="w-full">
                    <View className="flex-row mt-4 justify-between items-center mb-4 mx-5">
                        <View>
                            <Text className="font-bold text-[25px] pb-1">Chats</Text>
                        </View>

                        <TouchableOpacity
                            className="w-[34] h-[34] rounded-full flex justify-center items-center"
                            style={{backgroundColor: colors.primary}}
                        >
                            <Icon name={"add"} size={17} color="white"/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="w-full mx-4">
                    <TextInput
                        placeholder="Search"
                        clearButtonMode="always"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.searchInput}
                        value={searchQuery}
                        onChangeText={(query) => searchHandler(query)}
                    />
                </View>

                {fullData === null && !isEmpty ? (
                    <EmptyInbox isIndicator={true}/>
                ) : (
                    isEmpty ? <EmptyInbox/> :
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.id}
                            renderItem={({item}) => (
                                <ChatItem item={item} />
                            )}
                            className="w-full h-full mt-5"
                            refreshControl={
                                <RefreshControl refreshing={isRefresh} onRefresh={refreshHandler}/>
                            }
                        />
                )}
                <View className="w-full h-64"></View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    searchInput: {
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 12,
    }
});
