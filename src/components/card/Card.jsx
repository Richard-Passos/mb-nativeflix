import { withTheme } from "react-native-paper";
import { View, Image } from "react-native";
import Link from "../link";
import { Info } from "./utils";
import styles from "./styles";
import { viewWidth, normIMGPath } from "../../utils";

/* StyleVar could be 'compact' or 'detailed' */
const Card = ({ media, styleVar = "compact", style, theme }) => {
  const { type, id, posterPath, title, rating, overview } = normData(media);

  return (
    <Link view="Details" params={{ type, id }}>
      <View
        style={{
          ...styles.container,
          width: styleVar === "detailed" ? viewWidth * 0.92 : "auto",
          ...style,
        }}
      >
        <Image
          source={posterPath}
          resizeMode="cover"
          style={{
            ...styles.image,
            backgroundColor: theme.colors.backgroundVariant,

            borderColor: theme.colors.background,
          }}
        />

        {styleVar === "detailed" && <Info data={{ title, rating, overview }} />}
      </View>
    </Link>
  );
};

const normData = (media) => {
  const { name, id, poster_path, title, vote_average, overview } = media;

  return {
    type: name ? "tv" : "movie",
    id,
    posterPath: normIMGPath(poster_path),
    title: title || name,
    rating: Math.ceil(vote_average / 2) ?? 0,
    overview: overview || "Overview not found!",
  };
};

export default withTheme(Card);
