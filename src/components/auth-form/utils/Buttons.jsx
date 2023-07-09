import { View } from "react-native";
import { Button as RNButton, Text } from "react-native-paper";
import styles from "./styles";

const Buttons = ({ handleSubmit, states, auxSubmit, formType }) => (
  <View style={styles.buttons}>
    <Button onPress={() => handleSubmit(...states, ...auxSubmit)}>
      {formType.capitalize()}
    </Button>

    <Text style={{ textAlign: "center" }}>or</Text>

    <Button disabled>{formType.capitalize()} with Google</Button>
  </View>
);

const Button = ({ children, onPress, disabled }) => (
  <RNButton mode="contained" onPress={onPress} disabled={disabled}>
    {children}
  </RNButton>
);

export default Buttons;
