import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    StyleSheet,
    RefreshControl,
    FlatList, SectionList, Image
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {displayBar} from "../store/slices/NavigationBarSlice";
import {useState} from "react";
import filter from "lodash.filter";
import ChatItem from "../components/ChatItem";


const contactsData = [
    {image: 'https://via.placeholder.com/150', name: 'أحمد سعيد', id: '1'},
    {image: 'https://via.placeholder.com/150', name: 'باسم جميل', id: '2'},
    {image: 'https://via.placeholder.com/150', name: 'بسام احمد', id: '3'},
    {image: 'https://via.placeholder.com/150', name: 'تامر محمود', id: '3'},
    {image: 'https://via.placeholder.com/150', name: 'ثائر عبد الله', id: '4'},
    {image: 'https://via.placeholder.com/150', name: 'جمال حسان', id: '5'},
    {image: 'https://via.placeholder.com/150', name: 'حسام علي', id: '6'},
    {image: 'https://via.placeholder.com/150', name: 'خالد فؤاد', id: '7'},
    {image: 'https://via.placeholder.com/150', name: 'رائد ناصر', id: '10'},
    {image: 'https://via.placeholder.com/150', name: 'زكريا وليد', id: '11'},
    {image: 'https://via.placeholder.com/150', name: 'سامي كريم', id: '12'},
    {image: 'https://via.placeholder.com/150', name: 'شريف إبراهيم', id: '13'},
    {image: 'https://via.placeholder.com/150', name: 'صالح مصطفى', id: '14'},
    {image: 'https://via.placeholder.com/150', name: 'ضاحي حسين', id: '15'},
    {image: 'https://via.placeholder.com/150', name: 'طارق فهد', id: '16'},
    {image: 'https://via.placeholder.com/150', name: 'ظافر عادل', id: '17'},
    {image: 'https://via.placeholder.com/150', name: 'غسان أنور', id: '19'},
    {image: 'https://via.placeholder.com/150', name: 'فؤاد نبيل', id: '20'},
    {image: 'https://via.placeholder.com/150', name: 'ليث حمزة', id: '23'},
    {image: 'https://via.placeholder.com/150', name: 'ماهر جاسم', id: '24'},
    {image: 'https://via.placeholder.com/150', name: 'نزار سمير', id: '25'},
    {image: 'https://via.placeholder.com/150', name: 'هاني خليل', id: '26'},
];

const groupContactsByInitial = (contacts) => {
    const grouped = {};
    contacts.forEach(contact => {
        const initial = contact.name[0];
        if (!grouped[initial]) {
            grouped[initial] = [];
        }
        grouped[initial].push(contact);
    });

    return Object.keys(grouped).map(key => ({
        title: key,
        data: grouped[key]
    }));
};

export default function AddContact() {
    const groupedData = groupContactsByInitial(contactsData);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState(groupedData);
    const [fullData, setFullData] = useState(groupedData);


    const [contacts, setContacts] = useState(contactsData);

    const searchHandler = (query) => {
        setSearchQuery(query);
        const formattedQuery = query.toLowerCase();
        const filteredData = filter(fullData, (user) => {
            return contains(user.data[0], formattedQuery);
        });
        setData(filteredData);
    };

    const contains = ({name}, query) => {

        if(name)
            return name.includes(query);
        return false;
    };

    return (
        <SafeAreaView className="flex justify-center items-center mb-24">
            <View className="w-full flex-row justify-center items-center mt-3">
                <TouchableOpacity onPress={() => {
                    navigation.navigate("chats");
                    dispatch(displayBar());
                }} className={"absolute left-8"}>
                    <MaterialIcons name="arrow-back-ios" size={30}/>
                </TouchableOpacity>
                <Text className={"font-bold text-xl"}>Contacts</Text>
            </View>
            <View className="w-full mx-4 mt-5">
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
            <SectionList
                sections={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={()=> navigation.navigate("chat", {avatar:item.image, receiverName:item.name, receiverId:item.id,userId:202011016})} className={"flex-row items-center m-[10px] justify-end bg-white p-2 rounded-2xl shadow"}>
                        <Text className={"text-[18px] pr-[10px]"}>{item.name}</Text>
                        <Image
                            source={{uri: item.image}}
                            className={"w-[50px] h-[50px] mr-[10px] rounded-[25px]"}
                        />
                    </TouchableOpacity>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <View
                        className={"flex-row mr-[15px] justify-end"}>
                        <Text className={"font-semibold text-xl py-[5px]  px-[10px]"}>{title}</Text>
                    </View>
                )}
                className={"w-full mt-[20px]"}
            />
        </SafeAreaView>
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