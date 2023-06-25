/* Logic */
import { IMG_ORIGIN_PATH, normalizeDate } from "../../utils";

/* Components */
import {
  Container,
  Image,
  TextContainer,
  Title,
  Center,
  Date,
  Gap,
} from "./styles";
import Link from "../link";
import Rating from "../rating";
import Button from "../button";
import { Icon } from "react-native-elements";

const Card = ({ media, style }) => {
  const { type, id, posterPath, title, rating, releaseDate } =
    normalizeData(media);

  const link = {
    view: "Details",
    params: { type, id },
  };

  return (
    <Container key={id} style={style}>
      <Link {...link}>
        <Image source={{ uri: posterPath }} resizeMode="cover" />
      </Link>

      <TextContainer>
        <Gap>
          <Title>{title}</Title>

          <Rating rating={rating} />
        </Gap>

        <Gap>
          <Center>
            <Date>{releaseDate}</Date>

            <Icon
              name="heart"
              type="font-awesome"
              size={16}
              color="hsl(341, 100%, 50%)"
            />
          </Center>

          <Link {...link}>
            <Button style={{ pointerEvents: "none" }}>View</Button>
          </Link>
        </Gap>
      </TextContainer>
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
