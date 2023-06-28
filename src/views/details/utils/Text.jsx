import { useContext } from "react";
import { ThemeContext } from "styled-components";
import {
  TextContainer,
  RatingContainer,
  Title,
  Overview,
  BtnTrailer,
} from "./styles.js";
import { Carousel, Rating } from "../../../components";
import { Icon } from "react-native-elements";
import InfoCard from "./InfoCard";

const Text = ({ details }) => {
  const { runtime, releaseDate, genre, rating, title, overview } = details;

  const extraInfo = [
    {
      icon: {
        name: "progress-clock",
        type: "material-community",
      },
      title: "Duration",
      info: runtime,
    },
    {
      icon: {
        name: "calendar-month",
        type: "material-community",
      },
      title: "Release",
      info: releaseDate,
    },
    {
      icon: {
        name: "drama-masks",
        type: "material-community",
      },
      title: "Genre",
      info: genre,
    },
  ];

  const theme = useContext(ThemeContext);

  return (
    <TextContainer>
      <RatingContainer>
        <Rating rating={rating} />

        <Icon
          name="heart"
          type="font-awesome"
          size={16}
          color={theme.colors.red}
        />
      </RatingContainer>

      <Title>{title}</Title>

      {/* "\t" is replacing text-indent on css */}
      <Overview>{"\t" + overview}</Overview>

      {details && (
        <Carousel
          title=""
          data={extraInfo}
          renItem={infoCard}
          keyExt={(item) => item.title}
          viewAll={false}
        />
      )}

      <BtnTrailer>Play trailer</BtnTrailer>
    </TextContainer>
  );
};

const infoCard = (item) => <InfoCard data={item} />;

export default Text;
