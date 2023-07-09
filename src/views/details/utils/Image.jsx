import { withTheme } from "react-native-paper";
import { ImageBackground } from "react-native";
import styles from "./styles";

const Image = ({ theme, source }) => (
  <ImageBackground
    style={{ ...styles.image, backgroundColor: theme.colors.backgroundVariant }}
    source={source}
    resizeMode="cover"
  />
);

export default withTheme(Image);
