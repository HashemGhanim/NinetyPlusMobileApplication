import Home from "./screens/Home";
import LoginPage from "./screens/LoginPage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CustomNavigationBar from "./components/CustomNavigationBar";
import Chats from "./screens/Chats";
import Notifications from "./screens/Notifications";

const Stack = createNativeStackNavigator();

export default function App() {
  // const [fontsLoaded, fontError] = useFonts({
  //   SFProDisplayBold: require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  //   SFPro: require("./assets/fonts/SF-Pro.ttf"),
  // });

  // if (!fontsLoaded) {
  //   return <WelcomePage />;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="home"
      >
        <Stack.Screen name="login" component={LoginPage} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="chat" component={Chats} />
        <Stack.Screen name="notifications" component={Notifications} />
      </Stack.Navigator>

      {true && <CustomNavigationBar />}
    </NavigationContainer>
  );
}
