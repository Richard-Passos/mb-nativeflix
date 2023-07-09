import { useState } from "react";
import { TextInput as RNInput } from "react-native-paper";

const TextInput = ({ type, iconName, ph, value, onChange, isError }) => {
  const [isHide, setIsHide] = useState(true);

  const isPassword = type === "password";

  const leftIcon = icon(iconName),
    rightIcon =
      isPassword &&
      icon(isHide ? "eye" : "eye-off", () => setIsHide((state) => !state));

  return (
    <RNInput
      mode="outlined"
      label={type.capitalize()}
      placeholder={ph}
      left={leftIcon}
      right={rightIcon}
      secureTextEntry={isPassword && isHide}
      value={value}
      onChangeText={onChange}
      autoCapitalize={type === "email" ? "none" : "sentences"}
      error={isError}
    />
  );
};

/* Not using React element because lib doesn't support */
const icon = (name, onPress) => (
  <RNInput.Icon icon={name} size={20} onPress={onPress} />
);

export default TextInput;
