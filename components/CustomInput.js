import Animated from "react-native-reanimated";
import { Text, TextInput } from "react-native";

export default function CustomInput({
  label,
  labelEntering,
  labelStyles,
  containerStyles,
  inputEntering,
  placeHolder,
  placeHolderTextColor,
  secureTextEntry,
  onDataChange
}) {
  return (
    <>
      <Animated.View entering={labelEntering}>
        <Text className={labelStyles}>{label}</Text>
      </Animated.View>
      <Animated.View className={containerStyles} entering={inputEntering}>
        <TextInput
          placeholder={placeHolder}
          placeholderTextColor={placeHolderTextColor}
          secureTextEntry={secureTextEntry}
          onChangeText={(text) => onDataChange(label, text)}
        />
      </Animated.View>
    </>
  );
}
