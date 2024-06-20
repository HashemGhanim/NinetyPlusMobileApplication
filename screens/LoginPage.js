import {
  Image,
  StatusBar,
  Text,
  View,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import headerLogoImage from "../assets/images/logoInLoginPage.png";

import Animated, {
  FadeInDown,
  FadeInUp,
  FadeInLeft,
} from "react-native-reanimated";
import GoogleSvg from "../svgs/GoogleSvg";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import colors from "../constants/Colors";

function PreviewTextInLoginPage() {
  return (
    <Animated.View
      className="w-full mt-[290px]"
      entering={FadeInLeft.delay(100).duration(1000).springify()}
    >
      <Text
        className="font-[700] text-[30px] pl-[21px]"
        style={{ fontFamily: "SFProDisplayBold" }}
      >
        Let’s sign you in
      </Text>
      <Text
        className="font-[510] text-[20px] pl-[21px] py-1"
        style={{ fontFamily: "SF-Pro" }}
      >
        Welcome back.
      </Text>
      <Text
        className="font-[510] text-[20px] pl-[21px]"
        style={{ fontFamily: "SF-Pro" }}
      >
        You’ve been missed!
      </Text>
    </Animated.View>
  );
}

export default function LoginPage() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <StatusBar
          barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
        />
        <View className="w-full flex justify-center h-full items-center mb-2">
          <Animated.View
            className="w-[700] h-[700] rounded-full absolute -top-[430px] flex justify-center items-center"
            entering={FadeInUp.duration(1000).springify()}
            style={{
              backgroundColor: colors.primary,
            }}
          >
            <Image source={headerLogoImage} className="mt-[450px]" />
          </Animated.View>

          <PreviewTextInLoginPage />

          <View className="w-[90%] mx-4 mt-8 flex">
            <CustomInput
              label={"Email"}
              labelStyles={"pl-[5px] font-bold text-[15px]"}
              labelEntering={FadeInDown.delay(50).duration(1000).springify()}
              containerStyles={"bg-black/5 p-[5%] rounded-2xl w-full mt-2"}
              inputEntering={FadeInDown.delay(100).duration(1000).springify()}
              placeHolder={"example@gmail.com"}
              placeHolderTextColor={"gray"}
              secureTextEntry={false}
            />

            <CustomInput
              label={"Password"}
              labelStyles={"pl-[5px] font-bold text-[15px] mt-5"}
              labelEntering={FadeInDown.delay(200).duration(1000).springify()}
              containerStyles={"bg-black/5 p-[5%] rounded-2xl w-full mt-2"}
              inputEntering={FadeInDown.delay(200).duration(1000).springify()}
              placeHolder={"*********"}
              placeHolderTextColor={"gray"}
              secureTextEntry={true}
            />

            <CustomButton
              containerStyles={"flex justify-center items-center"}
              textStyles={"font-bold text-white"}
              title={"Login"}
              isLoading={false}
              viewStyles={"p-[5%] rounded-2xl w-full mt-10"}
              backgroundColor={colors.primary}
              entering={FadeInDown.delay(300).duration(1000).springify()}
            />

            <Animated.View
              className="w-full flex items-center mt-3"
              entering={FadeInDown.delay(300).duration(1000).springify()}
            >
              <View className="w-[90%] bg-[#D8D5D5] h-[0.5] mt-4 absolute"></View>
              <Text className="top-[7] bg-white">OR</Text>
            </Animated.View>

            <CustomButton
              title={"Continue with Google"}
              textStyles={"pl-2 font-bold text-white"}
              additionalComponent={<GoogleSvg />}
              containerStyles={"flex-row justify-center items-center"}
              entering={FadeInDown.delay(400).duration(1000).springify()}
              viewStyles={"p-[4%] rounded-2xl w-full mt-7"}
              backgroundColor={colors.google}
            />

            <Animated.View
              className="w-full flex-row justify-center items-center mb-5"
              entering={FadeInDown.delay(500).duration(1000).springify()}
            >
              <Text className="text-xs mt-4">You don’t have an account ?</Text>
              <Text className="text-xs mt-4 pl-1 text-blue-500">Sign up</Text>
            </Animated.View>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
