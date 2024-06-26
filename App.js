import {Provider} from "react-redux";
import store from "./store/store";
import MainNavigator from "./MainNavigator";


export default function App() {
    // const [fontsLoaded, fontError] = useFonts({
    //   SFProDisplayBold: require("./assets/fonts/SF-Pro-Display-Bold.otf"),
    //   SFPro: require("./assets/fonts/SF-Pro.ttf"),
    // });

    // if (!fontsLoaded) {
    //   return <WelcomePage />;
    // }

    return (
        <Provider store={store}>
            <MainNavigator/>
        </Provider>
    );
}
