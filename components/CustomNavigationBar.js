import { View, TouchableOpacity, Dimensions } from "react-native";
import colors from "../constants/Colors";
import HomeSvg from "../svgs/HomeSvg";
import ChatSvg from "../svgs/ChatSvg";
import NotificationSvg from "../svgs/NotificationSvg";
import SettingsSvg from "../svgs/SettingsSvg";

import { useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { DEFAULT_HIGH, DEFAULT_NAVIGATION_BAR_BOTTOM } from "@env";

const screenDimensions = Dimensions.get("screen");

export default function CustomNavigationBar() {
  const [navigationTabsLayout, setNavigationTabsLayout] = useState({});
  const [layoutInitialized, setLayoutInitialized] = useState(false);

  const marginOfPoint = useSharedValue(49);

  const nav = useNavigation();

  const bottomOfComponent =
    (Number(DEFAULT_NAVIGATION_BAR_BOTTOM) +
      (screenDimensions.height - Number(DEFAULT_HIGH))) /
    screenDimensions.scale;

  const widthOfContainer = 298;
  let navigationBarMargin = (screenDimensions.width - widthOfContainer) / 2;

  const onLayoutEachButton = useCallback((event, name) => {
    const layout = event.nativeEvent.layout;
    setNavigationTabsLayout((pre) => ({
      ...pre,
      [name]: layout,
    }));
  }, []);

  const handleLayout = useCallback(
    (event, name) => {
      if (!layoutInitialized) {
        onLayoutEachButton(event, name);
      }
    },
    [layoutInitialized, onLayoutEachButton]
  );

  const handleParentLayout = () => {
    if (!layoutInitialized) {
      setLayoutInitialized(true);
    }
  };

  const animatedStyles = useAnimatedStyle(() => ({
    marginLeft: withTiming(marginOfPoint.value, {
      duration: 500,
    }),
  }));

  const handlePress = (name) => {
    nav.navigate(name);
    marginOfPoint.value =
      navigationTabsLayout[name].x + navigationTabsLayout[name].width / 2 - 2.5;
  };

  return (
    <View>
      <View
        className="h-[50px] rounded-[25px] absolute flex items-center justify-evenly mx-auto left-1/2 "
        style={{
          backgroundColor: colors.primary,
          left: navigationBarMargin,
          width: widthOfContainer,
          bottom: bottomOfComponent,
        }}
        onLayout={handleParentLayout}
      >
        <View className="w-full flex-row justify-evenly items-center mt-2">
          <TouchableOpacity
            id="homeNavigationTab"
            onPress={() => handlePress("home")}
            onLayout={(event) => onLayoutEachButton(event, "home")}
          >
            <HomeSvg />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePress("chat")}
            onLayout={(event) => onLayoutEachButton(event, "chat")}
          >
            <ChatSvg />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePress("notifications")}
            onLayout={(event) => onLayoutEachButton(event, "notifications")}
          >
            <NotificationSvg />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePress("settings")}
            onLayout={(event) => onLayoutEachButton(event, "settings")}
          >
            <SettingsSvg />
          </TouchableOpacity>
        </View>
        <View className="w-full">
          <Animated.View
            className="w-[5px] h-[5px] rounded-full bg-white mb-2 ml-[49px]"
            style={animatedStyles}
          />
        </View>
      </View>
    </View>
  );
}
