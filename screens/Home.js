import { useState } from "react";
import CustomCalendar from "../components/CustomCalendar";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import colors from "../constants/Colors";
import CoursesContainer from "../components/CoursesContainer";

const UpperPartHome = () => {
  return (
    <View className="flex-row mx-5 mt-4 justify-between items-center mb-4">
      <View>
        <Text className="font-bold text-[20px] pb-1">Hello Hashem,</Text>
        <Text className="font-normal text-[13px]">
          Look at your daily schedule
        </Text>
      </View>

      <View
        className="w-[45] h-[45] rounded-full flex justify-center items-center"
        style={{ backgroundColor: colors.primary }}
      >
        <Text className="font-semibold text-white">H</Text>
      </View>
    </View>
  );
};

export default function Home() {
  const [day, setDay] = useState("2024-06-01");
  const [liveCourses, setLiveCourses] = useState([
    {
      id: 1,
      isLive: true,
      isPast: false,
      time: 0,
      courseName: "رياضيات توجيهي - علمي",
      courseInstructorName: "أ.سلمان زرعي",
    },
    {
      id: 2,
      isLive: true,
      isPast: false,
      time: 0,
      courseName: "رياضيات توجيهي - علمي",
      courseInstructorName: "أ.سلمان زرعي",
    },
    {
      id: 3,
      isLive: true,
      isPast: false,
      time: 0,
      courseName: "رياضيات توجيهي - علمي",
      courseInstructorName: "أ.سلمان زرعي",
    },
  ]);

  const [scheduleCourses, setScheduleCourses] = useState([
    {
      id: 1,
      isLive: false,
      isPast: false,
      time: 1,
      courseName: "رياضيات توجيهي - علمي",
      courseInstructorName: "أ.سلمان زرعي",
    },
  ]);

  const [pastCourses, setPastCourses] = useState([
    {
      id: 1,
      isLive: false,
      isPast: true,
      time: 1,
      courseName: "رياضيات توجيهي - علمي",
      courseInstructorName: "أ.سلمان زرعي",
    },
  ]);

  const handlePress = (currentDay) => {
    setDay(currentDay);
  };

  return (
    <SafeAreaView className="flex justify-center items-center mt-4">
      <ScrollView showsVerticalScrollIndicator={false} className="w-full">
        <View className="w-full">
          <UpperPartHome />
          <CustomCalendar
            currentDay={day}
            handlePressDay={handlePress}
            selectedColor={"orange"}
          />
          <CoursesContainer
            isLive={true}
            isPast={false}
            courses={liveCourses}
          />
          <CoursesContainer
            isLive={false}
            isPast={false}
            courses={scheduleCourses}
          />
          <CoursesContainer
            isLive={false}
            isPast={true}
            courses={pastCourses}
            containerStyle={"mb-24"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
