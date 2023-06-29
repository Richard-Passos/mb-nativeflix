import { useState, useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { Container, TextInput, IconContainer } from "./styles";
import { Icon } from "react-native-elements";

const Input = (props) => {
  const { reactRef, setState, isPassword = false, placeholder, style } = props;

  const [isVisible, setIsVisible] = useState(false);

  const theme = useContext(ThemeContext);

  return (
    <Container>
      <TextInput
        ref={reactRef}
        onChangeText={(text) => setState(text)}
        secureTextEntry={isPassword && !isVisible}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.gray}
        cursorColor={theme.colors.gray}
        style={style}
      />

      {isPassword && (
        <IconContainer>
          <Icon
            name={isVisible ? "eye" : "eye-slash"}
            type="font-awesome"
            size={16}
            color={theme.colors.priText}
            onPress={() => setIsVisible((prevState) => !prevState)}
          />
        </IconContainer>
      )}
    </Container>
  );
};

export default Input;
