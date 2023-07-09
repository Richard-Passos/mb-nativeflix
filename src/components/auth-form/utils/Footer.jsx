import { View } from "react-native";
import { Text } from "react-native-paper";
import Link from "../../link";
import styles from "./styles";

const Footer = ({ formType }) => {
  const opstTFormType = formType === "login" ? "Register" : "Login";

  const text =
    formType === "login" ? "Don't have an account? " : "Already registered? ";

  return (
    <View style={styles.footer}>
      <Text>{text}</Text>

      <Link view={opstTFormType}>{`${opstTFormType}!`}</Link>
    </View>
  );
};

export default Footer;
