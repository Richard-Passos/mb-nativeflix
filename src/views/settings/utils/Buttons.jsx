import { deleteAccount, logout } from "../../../assets/api";
import { withTheme, Button as RNButton } from "react-native-paper";
import { View } from "react-native";
import styles from "./styles";

const Buttons = ({ setModal, theme }) => (
  <View style={styles.buttons}>
    <Button
      title="Delete"
      setModal={setModal}
      onConfirm={deleteAccount}
      bgColor={theme.colors.red}
    />

    <Button title="Logout" setModal={setModal} onConfirm={logout} />
  </View>
);

const Button = ({ title, setModal, onConfirm, bgColor }) => (
  <RNButton
    mode="contained"
    style={{ flex: 1 }}
    onPress={() => {
      setModal({
        title,
        onConfirm,
      });
    }}
    buttonColor={bgColor}
  >
    {title}
  </RNButton>
);

export default withTheme(Buttons);
