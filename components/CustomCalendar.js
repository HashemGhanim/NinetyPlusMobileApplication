import { useEffect, useState } from "react";
import { View } from "react-native";
import { Calendar } from "react-native-calendars";

export default function CustomCalendar({
  currentDay,
  handlePressDay,
  selectedColor,
}) {
  const [day, setDay] = useState(currentDay);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <View style={{ width: "95%" }}>
        <Calendar
          // Customize the appearance of the calendar
          style={{
            width: "100%",
          }}
          // Specify the current date
          current={day}
          // Callback that gets called when the user selects a day
          onDayPress={(curr) => {
            setDay(curr.dateString);
            handlePressDay(curr);
          }}
          // Mark specific dates as marked
          markedDates={{
            [day]: { selected: true, selectedColor: selectedColor },
          }}
          // Customize the header style
          theme={{
            calendarBackground: "#ffffff",
            textSectionTitleColor: "#b6c1cd",
            selectedDayBackgroundColor: "#a61a1f",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#f50025",
            dayTextColor: "#2d4150",
            textDisabledColor: "#d9e1e8",
            dotColor: "#5e081f",
            selectedDotColor: "#ffffff",
            arrowColor: "orange",
            monthTextColor: "orange",
            textDayFontFamily: "monospace",
            textMonthFontFamily: "monospace",
            textDayHeaderFontFamily: "monospace",
            textDayFontWeight: "300",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "300",
            textDayFontSize: 16,
            textMonthFontSize: 24,
            textDayHeaderFontSize: 14,
            textDayHeaderColor: "blue",
          }}
        />
      </View>
    </View>
  );
}
