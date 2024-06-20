import { View, ScrollView, Text } from "react-native";
import Animated from "react-native-reanimated";

export default function Course({
  entering,
  title,
  courses,
  isLive,
  isSchedule,
}) {
  return (
    <Animated.View className="ml-4 mt-4" entering={entering}>
      <Text className="font-bold text-[18px]">{title}</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        className="mt-[15px]"
      >
        <View className="h-[140px] w-[120px] bg-black/5 rounded-[8px] mr-3"></View>
        <View className="h-[140px] w-[120px] bg-black/5 rounded-[8px] mr-3"></View>
        <View className="h-[140px] w-[120px] bg-black/5 rounded-[8px] mr-3"></View>
        <View className="h-[140px] w-[120px] bg-black/5 rounded-[8px] mr-3"></View>
        <View className="h-[140px] w-[120px] bg-black/5 rounded-[8px] mr-3"></View>
      </ScrollView>
    </Animated.View>
  );
}
