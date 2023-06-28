import { TouchableOpacity } from "react-native";
import { Text } from "./styles";

const Button = ({ onPress, containerStyle, clear, style, children }) => (
  <TouchableOpacity onPress={onPress} style={containerStyle}>
    <Text clear={clear} style={style}>
      {children}
    </Text>
  </TouchableOpacity>
);

export default Button;
