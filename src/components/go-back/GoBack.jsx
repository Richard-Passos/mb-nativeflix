import { useNavigation } from "@react-navigation/native";
import { withTheme, IconButton } from "react-native-paper";
import { opacify } from "polished";
import styles from "./styles";

const GoBack = ({ theme }) => {
  const navigation = useNavigation();

  return (
    <IconButton
      mode="contained"
      icon="chevron-left"
      onPress={navigation.goBack}
      iconColor={theme.colors.onSurface}
      containerColor={opacify(-0.25, theme.colors.background)}
      style={styles.icon}
    />
  );
};

export default withTheme(GoBack);
