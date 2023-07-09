import { HelperText } from "react-native-paper";
import styles from "./styles";

const ErrorText = ({ visible, text }) => (
  <HelperText type="error" visible={visible} style={styles.errorCon}>
    {text.capitalize().replaceAll("-", " ")}
  </HelperText>
);

export default ErrorText;
