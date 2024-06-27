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
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {hideBar} from "../store/slices/NavigationBarSlice";
import { getAllChats } from "../store/slices/chatsSlice";

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

    const navigation = useNavigation();
    const {isLoading, chats} = useSelector(state => state.chats);
    console.log(isLoading)
    useEffect(() => {
        dispatch(getAllChats());
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

    const dispatch = useDispatch();

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
                            onPress={() => {
                                navigation.navigate("addContact");
                                dispatch(hideBar());
                            }}
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

                {isLoading ? (
                    <EmptyInbox isIndicator={true}/>
                ) : (
                    isEmpty ? <EmptyInbox/> :
                        <FlatList
                            data={chats}
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
