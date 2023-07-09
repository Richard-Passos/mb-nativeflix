import { Linking, View } from "react-native";
import { withTheme, IconButton, Text } from "react-native-paper";
import styles from "./styles";

const icons = [
  {
    name: "github",
    color: "hsl(240, 35%, 6%)",
    url: "https://github.com/Richard-Passos",
  },
  {
    name: "linkedin",
    color: "hsl(240, 40%, 55%)",
    url: "https://www.linkedin.com/in/richardp-dev/",
  },
  {
    name: "instagram",
    color: "hsl(341, 75%, 50%)",
    url: "https://www.instagram.com/richardp.dev/",
  },
];

const Footer = ({ theme }) => (
  <View
    style={{
      ...styles.container,
      backgroundColor: theme.colors.backgroundVariant,

      borderColor: theme.colors.background,
    }}
  >
    <View style={styles.icons}>
      {icons.map(({ name, color, url }) => (
        <IconButton
          key={name + url}
          mode="contained-tonal"
          icon={name}
          style={{ margin: 0, backgroundColor: color }}
          onPress={() => Linking.openURL(url)}
        />
      ))}
    </View>

    <Text style={{ color: theme.colors.gray }}>
      © 2023 copyright - Richard Passos
    </Text>
  </View>
);

export default withTheme(Footer);
