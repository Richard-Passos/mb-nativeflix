/* Components */
import { TextInput } from "./styles";

const Input = ({ reactRef, placeholder, onChange, isPassword = false }) => (
  <TextInput
    ref={reactRef}
    placeholder={placeholder}
    onChangeText={(text) => onChange(text)}
    secureTextEntry={isPassword}
  />
);

export default Input;
