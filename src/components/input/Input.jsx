import { View } from "react-native";
import { TextInput, ErrorText } from "./utils";
import { ProgressBar } from "react-native-paper";
import styles from "./styles";

const Input = ({ type, value, iconName, ph, error, setValue, progBar }) => {
  const isError = error?.input === type,
    barProgress = value.length < 6 ? value.length / 10 : 1;

  return (
    <View>
      <TextInput
        iconName={iconName}
        type={type}
        ph={ph}
        isError={isError}
        value={value}
        onChange={(text) => setValue(text)}
      />

      {progBar && (
        <ProgressBar
          progress={barProgress}
          visible={value.length}
          style={styles.progBar}
        />
      )}

      <ErrorText visible={isError} text={error?.message || ""} />
    </View>
  );
};

export default Input;
