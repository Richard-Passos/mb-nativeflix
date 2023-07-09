import { Snackbar as RNSnackbar } from "react-native-paper";
import styles from "./styles";

const Snackbar = ({ visible, onDismiss, text }) => (
  <RNSnackbar
    wrapperStyle={styles.snackbar}
    visible={visible}
    onDismiss={onDismiss}
    action={{
      label: "Dismiss",
    }}
  >
    {text}
  </RNSnackbar>
);

export default Snackbar;
