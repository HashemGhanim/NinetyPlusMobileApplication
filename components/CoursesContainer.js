import { View, Text, ScrollView } from "react-native";
import CourseCard from "./CourseCard";
import { useEffect, useState } from "react";

export default function CoursesContainer({
  isLive,
  isPast,
  courses,
  containerStyle,
}) {
  const [label, setLabel] = useState("");
  const [localCourses, setLocalCourses] = useState([]);

  useEffect(() => {
    if (isLive === true) setLabel("Live now");
    else if (isPast === true) setLabel("Past lectures");
    else setLabel("Scheduled");

    setLocalCourses(courses);
  }, []);

  return (
    <>
      <View className={`ml-4 mt-4 ${containerStyle}`}>
        <Text className="font-bold text-[18px]">{label}</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          className="mt-[15px]"
        >
          {localCourses.map((item) => (
            <CourseCard
              key={item.id}
              courseName={item.courseName}
              courseInstructorName={item.courseInstructorName}
              isLive={item.isLive}
              isPast={item.isPast}
              time={item.time}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
}
