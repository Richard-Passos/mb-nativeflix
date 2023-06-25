/* Components */
import { TouchableOpacity } from "react-native";
import { Text } from "./styles";

const Button = ({ onPress, clear, style, children }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Text clear={clear} style={style}>
      {children}
    </Text>
  </TouchableOpacity>
);

export default Button;
