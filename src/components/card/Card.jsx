/* Logic */
import { IMG_ORIGIN_PATH, normalizeDate } from "../../utils";

/* Components */
import {
  Container,
  Image,
  TextContainer,
  Title,
  Center,
  Small,
  Gap,
  BG,
} from "./styles";
import Link from "../link";
import Rating from "../rating";
import Button from "../button";
import { View } from "react-native";

/* StyleVar could be 'compact' or 'detailed' */
const Card = ({ media, styleVar = "compact", style }) => {
  const { type, id, posterPath, title, rating, releaseDate } =
    normalizeData(media);

  const link = {
    view: "Details",
    params: { type, id },
  };

  return (
    <Container key={id} style={style} styleVar={styleVar}>
      <BG />
      <Link {...link}>
        <Image
          source={{ uri: posterPath }}
          resizeMode="cover"
          styleVar={styleVar}
        />
      </Link>

      {styleVar === "detailed" && (
        <TextContainer>
          <Gap>
            <Title numberOfLines={1}>{title}</Title>

            <Rating rating={rating} />
          </Gap>

          {/* TODO: Add more info */}
          {/* <Small>({releaseDate})</Small> */}

          <Link {...link}>
            <Button containerStyle={{ pointerEvents: "none" }}>View</Button>
          </Link>
        </TextContainer>
      )}
    </Container>
  );
};

const normalizeData = (media) => {
  const {
    name,
    id,
    title,
    poster_path,
    vote_average,
    release_date,
    first_air_date,
  } = media;

  return {
    type: name ? "tv" : "movie",
    id,
    title: title ?? name,
    posterPath: IMG_ORIGIN_PATH + poster_path,
    rating: Math.ceil(vote_average / 2) || 0,
    releaseDate: normalizeDate(release_date ?? first_air_date),
  };
};

export default Card;
