import { withTheme, Text as RNText } from "react-native-paper";
import styles from "./styles";

const Text = ({ theme }) => (
  <>
    <RNText
      style={{
        ...styles.subtitle,
        color: theme.colors.primary,
      }}
      variant="titleLarge"
    >
      Forgot password?
    </RNText>

    <RNText style={styles.text}>
      Please enter your email address to recieve a verification email
    </RNText>
  </>
);

export default withTheme(Text);
