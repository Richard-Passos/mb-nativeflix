import { withTheme, Text } from "react-native-paper";
import { View } from "react-native";
import { Rating, Carousel } from "../../../components";
import InfoCard from "./InfoCard";
import Trailer from "./Trailer";
import styles from "./styles";

const Info = ({ details, theme, trailer }) => {
  const { runtime, releaseDate, genre, rating, title, overview } = details,
    extraInfo = getExtraInfo(runtime, releaseDate, genre);

  return (
    <View
      style={{ ...styles.infoCon, backgroundColor: theme.colors.background }}
    >
      <View style={{ gap: 8 }}>
        <Text style={{ fontWeight: "bold" }} variant="titleLarge">
          {title}
        </Text>

        <Rating rating={rating} />
      </View>

      <Text
        style={{ lineHeight: 18, color: theme.colors.onBackground }}
        variant="labelSmall"
      >
        {"\t" + overview}
      </Text>

      {details && (
        <Carousel
          title=""
          data={extraInfo}
          renItem={infoCard}
          keyExt={(item) => item.title}
          style={styles.carousel}
        />
      )}

      <Trailer trailer={trailer} />
    </View>
  );
};

const infoCard = (item) => <InfoCard data={item} />;

const getExtraInfo = (runtime, releaseDate, genre) => [
  {
    iconName: "progress-clock",
    title: "Duration",
    text: runtime,
  },
  {
    iconName: "calendar-month",
    title: "Release",
    text: releaseDate,
  },
  {
    iconName: "drama-masks",
    title: "Genre",
    text: genre,
  },
];

export default withTheme(Info);
