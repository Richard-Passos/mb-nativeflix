import { withTheme, Text } from "react-native-paper";
import { View } from "react-native";
import Rating from "../../rating";
import styles from "./styles";

const Info = ({ data, theme }) => {
  const { title, rating, overview } = data;

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.backgroundVariant,
      }}
    >
      <View style={{ gap: 4 }}>
        <Text style={{ fontWeight: "bold" }} numberOfLines={1}>
          {title}
        </Text>

        <Rating rating={rating} />
      </View>

      <Text
        style={{ color: theme.colors.onBackground }}
        variant="labelSmall"
        numberOfLines={5}
      >
        {"\t" + overview}
      </Text>
    </View>
  );
};

export default withTheme(Info);
