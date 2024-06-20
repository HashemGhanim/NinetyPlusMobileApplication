import { View, Image, Text } from "react-native";
import LiveComponent from "./LiveComponent";

export default function CourseCard({
  isLive,
  isPast,
  time,
  courseName,
  courseInstructorName,
}) {
  return (
    <View className="h-[180px] w-[160px] bg-black/5 rounded-[8px] mr-3 flex items-end">
      <Image
        source={{
          uri: "https://www.open.edu.au/-/media/blog/2023/03-march/careers-in-maths.jpg?rev=47f96a32d6b4449993d9b33e5d8e7f05&hash=C00D7E19159818C2FDAFB8D1FA8C2281",
        }}
        className="w-[90%] h-1/2 rounded-[8px] mt-2 mx-auto"
      />
      <Text className="font-bold text-[12px] mr-3 mt-2">{courseName}</Text>
      <Text className="font-normal text-[10px] mr-3 mt-2">
        {courseInstructorName}
      </Text>
      <View className="w-full pl-2 mt-3">
        {isLive ? (
          <LiveComponent />
        ) : (
          <Text className="text-[10px] font-semibold">
            {time} {isPast ? "hour ago" : "hour left"}
          </Text>
        )}
      </View>
    </View>
  );
}
