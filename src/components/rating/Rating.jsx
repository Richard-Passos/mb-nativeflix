import { withTheme, IconButton } from "react-native-paper";
import { View } from "react-native";
import styles from "./styles";

const starsNum = Array(5).fill("");

const Rating = ({ rating, theme }) => (
  <View style={styles.container}>
    {starsNum.map((_, i) => (
      <IconButton
        key={i}
        icon="star"
        size={16}
        iconColor={i + 1 <= rating ? theme.colors.yellow : theme.colors.gray}
      />
    ))}
  </View>
);

export default withTheme(Rating);
