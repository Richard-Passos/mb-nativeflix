import { withTheme, IconButton, Text } from "react-native-paper";
import { View } from "react-native";
import styles from "./styles";
import { opacify } from "polished";

const InfoCard = ({ data, theme }) => {
  const { iconName, title, text } = data;

  return (
    <View
      style={{
        ...styles.cardCon,
        backgroundColor: opacify(-0.9, theme.colors.onSurface),
      }}
    >
      <IconButton icon={iconName} size={32} style={{ margin: -10 }} />

      <View style={{ gap: 2 }}>
        <Text style={{ color: theme.colors.onBackground }} variant="labelSmall">
          {title}
        </Text>

        <Text style={{ fontWeight: "bold" }}>{text || "Not found"}</Text>
      </View>
    </View>
  );
};

export default withTheme(InfoCard);
