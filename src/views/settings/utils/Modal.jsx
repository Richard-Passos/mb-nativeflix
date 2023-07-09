import {
  withTheme,
  Portal,
  Modal as RNModal,
  Text,
  Button,
} from "react-native-paper";
import { View } from "react-native";
import styles from "./styles";

const Modal = ({ visible, onDismiss, theme, title, onConfirm }) => (
  <Portal>
    <RNModal
      visible={visible}
      onDismiss={onDismiss}
      contentContainerStyle={{
        ...styles.modal,
        backgroundColor: theme.colors.backgroundVariant,
      }}
    >
      <View style={{ gap: 8 }}>
        <Text variant="titleMedium">{title.capitalize()} account</Text>

        <Text>
          {"\t"} Are you sure you want to {title.toLowerCase()} your account?
        </Text>
      </View>

      <View style={styles.modalBtns}>
        <Button onPress={onDismiss}>Cancel</Button>

        <Button mode="contained" onPress={onConfirm}>
          Yes, {title.toLowerCase()}
        </Button>
      </View>
    </RNModal>
  </Portal>
);

export default withTheme(Modal);
