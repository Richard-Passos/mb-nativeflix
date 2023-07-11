import { useState } from "react";
import { FIREBASE_AUTH } from "../../../firebaseConfig";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Modal, Buttons } from "./utils";
import styles from "./styles";

const Settings = () => {
  const [modal, setModal] = useState({
    title: "",
    onConfirm: () => {},
  });

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }} variant="titleLarge">
        {FIREBASE_AUTH.currentUser.displayName}'s account
      </Text>

      <Modal
        visible={modal.title}
        onDismiss={() =>
          setModal({
            title: "",
            onConfirm: () => {},
          })
        }
        title={modal.title}
        onConfirm={modal.onConfirm}
      />

      <Buttons setModal={setModal} />
    </View>
  );
};

export default Settings;
