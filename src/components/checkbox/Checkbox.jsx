import { useState, useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { Container, Box, Text } from "./styles";
import { Icon } from "react-native-elements";

const Checkbox = ({ onPress, children }) => {
  const [isChecked, setIsChecked] = useState(false);

  const theme = useContext(ThemeContext);

  const handlePress = () => {
    onPress(isChecked);
    setIsChecked((prevState) => !prevState);
  };

  return (
    <Container onPress={handlePress}>
      <Box>
        <Icon
          name="check"
          type="font-awesome"
          size={16}
          color={theme.colors.primary}
        />
      </Box>

      <Text>{children}</Text>
    </Container>
  );
};

export default Checkbox;
