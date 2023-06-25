/* Logic */
import { useState } from "react";

/* Components */
import { Container, Box, Text } from "./styles";

const Checkbox = ({ onPress, children }) => {
  const [isChecked, setIsChecked] = useState(false);

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
          color="hsl(235, 50%, 50%)"
        />
      </Box>

      <Text>{children}</Text>
    </Container>
  );
};

export default Checkbox;
