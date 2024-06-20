import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import Animated from "react-native-reanimated";

function CustomButton({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  additionalComponent,
  entering,
  viewStyles,
  backgroundColor,
}) {
  return (
    <Animated.View
      className={`${viewStyles} bg-[${backgroundColor}]`}
      entering={entering}
      style={{ backgroundColor: backgroundColor }}
    >
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={`${containerStyles} ${isLoading ? "opacity-50" : ""}`}
      >
        {additionalComponent}
        <Text className={`${textStyles}`}>{title}</Text>
        {isLoading && (
          <ActivityIndicator
            animating={isLoading}
            color={"#000"}
            size={"small"}
            className={"ml-2"}
          />
        )}
      </TouchableOpacity>
    </Animated.View>
  );
}

export default CustomButton;
