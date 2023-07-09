import { View } from "react-native";
import { RadioButton } from "react-native-paper";
import Link from "../../link";
import styles from "./styles";

const Others = ({ checked, setChecked }) => (
  <View style={styles.others}>
    <Radio
      label="Remember me"
      status={checked ? "checked" : "unchecked"}
      onPress={() => setChecked((state) => !state)}
    />

    <Link view="ForgotPass" style={{ marginRight: 28 }}>
      Forgot password?
    </Link>
  </View>
);

const Radio = ({ label, status, onPress }) => (
  <RadioButton.Item
    label={label}
    status={status}
    onPress={onPress}
    position="leading"
    labelStyle={{ fontSize: 14 }}
  />
);

export default Others;
