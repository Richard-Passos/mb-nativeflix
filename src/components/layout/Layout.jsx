import { withTheme } from "react-native-paper";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./styles";

const Layout = ({ theme, children }) => (
  <View
    style={{
      ...styles.container,
      backgroundColor: theme.colors.background,
    }}
  >
    <StatusBar style="light" />

    {children}
  </View>
);

export default withTheme(Layout);
