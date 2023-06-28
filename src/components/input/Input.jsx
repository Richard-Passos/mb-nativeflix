/* Logic */
import { useContext } from "react";
import { ThemeContext } from "styled-components";

/* Components */
import { TextInput } from "./styles";

const Input = ({ reactRef, placeholder, setState, isPassword = false }) => {
  const theme = useContext(ThemeContext);

  return (
    <TextInput
      ref={reactRef}
      placeholder={placeholder}
      onChangeText={(text) => setState(text)}
      secureTextEntry={isPassword}
      placeholderTextColor={theme.colors.gray}
    />
  );
};

export default Input;
