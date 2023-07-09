import { withTheme, Text, Button } from "react-native-paper";
import { View } from "react-native";
import ErrorSvg from "../../assets/images/error.svg";
import Link from "../link";
import styles from "./styles";

const NotFound = ({ theme }) => (
  <View
    style={{ ...styles.container, backgroundColor: theme.colors.background }}
  >
    <ErrorSvg width={75} height={75} />

    <View style={styles.subCon}>
      <Text style={{ color: theme.colors.error }} variant="displaySmall">
        Error: 404
      </Text>

      <Text variant="titleLarge">Not found!</Text>
    </View>

    <Link view="BottomTabs">
      <Button mode="contained">Go Back</Button>
    </Link>
  </View>
);

export default withTheme(NotFound);
