import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import colors from "../constants/Colors";
import SearchSvg from "../svgs/SearchSvg";
import filter from "lodash.filter";
import { useEffect, useState } from "react";

export default function Chat() {
  const [data, setData] = useState(null);
  const [fullData, setFullData] = useState(null);
  const [isRefresh, setIsRefresh] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData([
        {
          id: "6671c5453dbccf4888b27e76",
          image: "http://placehold.it/32x32",
          firstName: "هاشم",
          lastName: "زرعي",
          unread: 0,
          time: "06:02 AM",
        },
        {
          id: "6671c545767fa879ea2682b8",
          image: "http://placehold.it/32x32",
          firstName: "Nieves",
          lastName: "Ramsey",
          unread: 4,
          time: "04:22 AM",
        },
        {
          id: "6671c54537460a706939febd",
          image: "http://placehold.it/32x32",
          firstName: "Baker",
          lastName: "Farrell",
          unread: 2,
          time: "11:26 AM",
        },
        {
          id: "6671c54552f3a9d1994cc6f2",
          image: "http://placehold.it/32x32",
          firstName: "Theresa",
          lastName: "Franco",
          unread: 0,
          time: "02:51 AM",
        },
        {
          id: "6671c5451220220aacb0b106",
          image: "http://placehold.it/32x32",
          firstName: "York",
          lastName: "Barlow",
          unread: 1,
          time: "07:49 PM",
        },
        {
          id: "6671c545bddfee0cf04fe28c",
          image: "http://placehold.it/32x32",
          firstName: "Adela",
          lastName: "Page",
          unread: 3,
          time: "09:06 PM",
        },
        {
          id: "6671c545e5b29e28c846c8f5",
          image: "http://placehold.it/32x32",
          firstName: "Baxter",
          lastName: "Smith",
          unread: 1,
          time: "04:57 AM",
        },
        {
          id: "6671c54546c8d5cecd339693",
          image: "http://placehold.it/32x32",
          firstName: "Rosalinda",
          lastName: "Levine",
          unread: 4,
          time: "08:47 AM",
        },
      ]);
      setFullData([
        {
          id: "6671c5453dbccf4888b27e76",
          image: "http://placehold.it/32x32",
          firstName: "هاشم",
          lastName: "زرعي",
          unread: 0,
          time: "06:02 AM",
        },
        {
          id: "6671c545767fa879ea2682b8",
          image: "http://placehold.it/32x32",
          firstName: "Nieves",
          lastName: "Ramsey",
          unread: 4,
          time: "04:22 AM",
        },
        {
          id: "6671c54537460a706939febd",
          image: "http://placehold.it/32x32",
          firstName: "Baker",
          lastName: "Farrell",
          unread: 2,
          time: "11:26 AM",
        },
        {
          id: "6671c54552f3a9d1994cc6f2",
          image: "http://placehold.it/32x32",
          firstName: "Theresa",
          lastName: "Franco",
          unread: 0,
          time: "02:51 AM",
        },
        {
          id: "6671c5451220220aacb0b106",
          image: "http://placehold.it/32x32",
          firstName: "York",
          lastName: "Barlow",
          unread: 1,
          time: "07:49 PM",
        },
        {
          id: "6671c545bddfee0cf04fe28c",
          image: "http://placehold.it/32x32",
          firstName: "Adela",
          lastName: "Page",
          unread: 3,
          time: "09:06 PM",
        },
        {
          id: "6671c545e5b29e28c846c8f5",
          image: "http://placehold.it/32x32",
          firstName: "Baxter",
          lastName: "Smith",
          unread: 1,
          time: "04:57 AM",
        },
        {
          id: "6671c54546c8d5cecd339693",
          image: "http://placehold.it/32x32",
          firstName: "Rosalinda",
          lastName: "Levine",
          unread: 4,
          time: "08:47 AM",
        },
      ]);
    }, 2000);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity className="w-full relative py-10 ">
      <Image
        source={{
          uri: item.image,
        }}
        style={{
          width: 50,
          height: 50,
          borderRadius: 999999999,
        }}
        className={"absolute right-2 top-2"}
      />
      <Text className={"absolute right-[72px] top-2 font-bold text-base"}>
        {item.firstName} {item.lastName}
      </Text>
      {item.unread === 0 ? (
        <Text className="text-xs absolute right-[72px] top-9">
          انا هاشم كيف حالك ؟
        </Text>
      ) : (
        <Text className="text-xs absolute right-[72px] top-9 font-semibold">
          انا هاشم كيف حالك ؟
        </Text>
      )}
      <View className="absolute left-3 top-2 flex justify-center items-center">
        <Text className="font-normal text-[#989191]">{item.time}</Text>
      </View>
      {item.unread > 0 && (
        <View
          className="w-5 h-5 bg-red-600 rounded-full absolute left-5 top-8 flex justify-center items-center"
          style={{ backgroundColor: colors.primary }}
        >
          <Text className="text-white font-semibold">{item.unread}</Text>
        </View>
      )}
      <View className="h-[1px] w-96 bg-[#ccc] absolute left-0 bottom-0 rigth-[60px]"></View>
    </TouchableOpacity>
  );

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

  const contains = ({ firstName, lastName }, query) => {
    // firstName = firstName.toLowerCase();
    // lastName = lastName.toLowerCase();
    if (firstName.includes(query) || lastName.includes(query)) return true;
    return false;
  };

  return (
    <SafeAreaView className="flex justify-center items-center mt-4">
      <View className="w-full">
        <View className="flex-row mt-4 justify-between items-center mb-4 mx-5">
          <View>
            <Text className="font-bold text-[25px] pb-1">Chats</Text>
          </View>

          <TouchableOpacity
            className="w-[30] h-[30] rounded-full flex justify-center items-center"
            style={{ backgroundColor: colors.primary }}
          >
            <Text className="text-xl text-white pb-1 font-semibold">+</Text>
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

      {data === null ? (
        <View className={"flex justify-center items-center w-full mt-5"}>
          <ActivityIndicator size={"large"} />
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          className="w-full h-full mt-5"
          refreshControl={
            <RefreshControl refreshing={isRefresh} onRefresh={refreshHandler} />
          }
        />
      )}
      <View className="w-full h-64"></View>
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
  },
  unreadMessage: {
    fontWeight: "semibold",
  },
  readMessage: {
    fontWeight: "normal",
  },
});
