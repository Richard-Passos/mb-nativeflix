import { Container, Image } from "./styles";
import Link from "../link";
import { Info } from "./utils";
import { IMG_ORIGIN_PATH } from "../../utils";

/* StyleVar could be 'compact' or 'detailed' */
const Card = ({ media, styleVar = "compact", style }) => {
  const { type, id, posterPath } = normalizeData(media);

  const link = {
    view: "Details",
    params: { type, id },
  };

  return (
    <Container styleVar={styleVar} style={style}>
      <Link {...link}>
        <Image
          source={{ uri: posterPath }}
          resizeMode="cover"
          styleVar={styleVar}
        />
      </Link>

      {styleVar === "detailed" && <Info media={media} link={link} />}
    </Container>
  );
};

const normalizeData = ({ name, id, poster_path }) => ({
  type: name ? "tv" : "movie",
  id,
  posterPath: IMG_ORIGIN_PATH + poster_path,
});

export default Card;
