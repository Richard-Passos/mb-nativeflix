import { FIREBASE_AUTH } from "../../../../FirebaseConfig";
import { withTheme, Text } from "react-native-paper";
import { View } from "react-native";
import styles from "./styles";

const Greeting = ({ theme }) => (
  <View style={styles.greeting}>
    <Text variant="titleLarge" numberOfLines={1}>
      Hi, {FIREBASE_AUTH.currentUser.displayName}!
    </Text>

    <Text style={{ color: theme.colors.onBackground }} variant="labelSmall">
      Let's watch
    </Text>
  </View>
);

export default withTheme(Greeting);
