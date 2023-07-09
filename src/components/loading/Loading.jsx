import { withTheme } from "react-native-paper";
import { View, ActivityIndicator } from "react-native";
import styles from "./styles";

const Loading = ({ theme }) => (
  <View
    style={{
      ...styles.container,
      backgroundColor: theme.colors.background,
    }}
  >
    <ActivityIndicator size={75} color={theme.colors.primary} animating />
  </View>
);

export default withTheme(Loading);
