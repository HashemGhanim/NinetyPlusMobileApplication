import { Image, View, StatusBar } from "react-native";
import welcomeLogo from "../assets/images/NinetyPlusWelcomLogoPreview.png";
import Animated, { FadeInDown, ReduceMotion } from "react-native-reanimated";

export default function WelcomePage() {
  return (
    <View
      className={
        "bg-[#FDA203] flex-1 justify-center items-center w-full h-full"
      }
    >
      <StatusBar barStyle={"light-content"} animated={true} />
      <Animated.Image
        source={welcomeLogo}
        entering={FadeInDown.duration(1000).springify()}
      />
    </View>
  );
}
