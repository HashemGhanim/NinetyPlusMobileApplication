
import uuid from "react-native-uuid";
const getAllNotifications = async(userId, token) => {
    return [
        {
            id: 1,
            text: "Mr. هاشم زرعي is active now, you can message him 😄",
            time: new Date().toString(),
            avatar: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            text: "This course رياضيات عامة is live now, here we go 🏃",
            time: new Date(Date.now() - 3600000).toString(),
            avatar: "https://www.open.edu.au/-/media/blog/2023/03-march/careers-in-maths.jpg?rev=47f96a32d6b4449993d9b33e5d8e7f05&hash=C00D7E19159818C2FDAFB8D1FA8C2281",
        },
        {
            id: 3,
            text: "New message from John",
            time: new Date("2024-06-23").toString(), // 2 hours ago
            avatar: "https://via.placeholder.com/150",
        }
    ]
}
export default {getAllNotifications}