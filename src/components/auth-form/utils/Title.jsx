import { Text } from "react-native-paper";
import styles from "./styles";

const Title = ({ children }) => (
  <Text variant="displaySmall" style={styles.title}>
    {children.capitalize()}
  </Text>
);

export default Title;
