import { withTheme } from "react-native-paper";
import { View } from "react-native";
import styles from "./styles";

const Container = ({ theme, children }) => (
  <View
    style={{
      ...styles.container,
      backgroundColor: theme.colors.background,
    }}
  >
    {children}
  </View>
);

export default withTheme(Container);
