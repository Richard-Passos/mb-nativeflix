/* Logic */
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { ThemeContext } from "styled-components/native";

/* Components */
import { Container } from "./styles";
import { Icon } from "react-native-elements";

const GoBack = () => {
  const navigation = useNavigation();

  const theme = useContext(ThemeContext);

  return (
    <Container onPress={() => navigation.goBack()}>
      <Icon
        name="chevron-left"
        type="material-community"
        size={24}
        color={theme.colors.opstTheme}
      />
    </Container>
  );
};

export default GoBack;
