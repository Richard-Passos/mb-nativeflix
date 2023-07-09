import { View } from "react-native";
import UpsidedownWaveSvg from "../../../assets/images/upsidedown-wave.svg";
import { GoBack } from "../../../components";
import { Text } from "react-native-paper";
import styles from "./styles";
import { viewWidth } from "../../../utils";

const Header = () => (
  <View style={styles.header}>
    <UpsidedownWaveSvg width={viewWidth} height={275} />

    <View style={styles.goBack}>
      <GoBack />
    </View>

    <Text style={styles.title} variant="titleLarge">
      Forgot password
    </Text>
  </View>
);

export default Header;
