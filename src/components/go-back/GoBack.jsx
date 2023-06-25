/* Logic */
import { useNavigation } from "@react-navigation/native";

/* Components */
import { Container } from "./styles";
import { Icon } from "react-native-elements";

const GoBack = () => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.goBack()}>
      <Icon
        name="chevron-left"
        type="material-community"
        size={24}
        color="hsl(0, 0%, 85%)"
      />
    </Container>
  );
};

export default GoBack;
