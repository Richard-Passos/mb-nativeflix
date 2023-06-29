import { useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import { Container, Row, Title, Text, Trailer } from "./styles.js";
import { Rating, Carousel } from "../../../components";
import { Icon } from "react-native-elements";
import InfoCard from "./InfoCard.jsx";

const Info = ({ details }) => {
  const [isPlay, setIsPlay] = useState(false);

  const { runtime, releaseDate, genre, rating, title, overview } = details,
    extraInfo = getExtraInfo(runtime, releaseDate, genre);

  const theme = useContext(ThemeContext);

  return (
    <Container>
      <Row>
        <Rating rating={rating} />

        <Icon
          name="heart"
          type="font-awesome"
          size={16}
          color={theme.colors.red}
        />
      </Row>

      <Title>{title}</Title>

      {/* "\t" is replacing text-indent on css */}
      <Text>{"\t" + overview}</Text>

      {details && (
        <Carousel
          title=""
          data={extraInfo}
          renItem={infoCard}
          keyExt={(item) => item.title}
          style={{ marginHorizontal: 0, marginTop: -32 }}
        />
      )}

      <Trailer onPress={() => setIsPlay((prevState) => !prevState)}>
        {!isPlay ? "Play" : "Pause"} Trailer
      </Trailer>
    </Container>
  );
};

const infoCard = (item) => <InfoCard data={item} />;

const getExtraInfo = (runtime, releaseDate, genre) => [
  {
    icon: {
      name: "progress-clock",
      type: "material-community",
    },
    title: "Duration",
    text: runtime,
  },
  {
    icon: {
      name: "calendar-month",
      type: "material-community",
    },
    title: "Release",
    text: releaseDate,
  },
  {
    icon: {
      name: "drama-masks",
      type: "material-community",
    },
    title: "Genre",
    text: genre,
  },
];

export default Info;
