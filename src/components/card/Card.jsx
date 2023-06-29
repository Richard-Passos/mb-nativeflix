import { Container, Image } from "./styles";
import Link from "../link";
import { Info } from "./utils";
import { normIMGPath } from "../../utils";

/* StyleVar could be 'compact' or 'detailed' */
const Card = ({ media, styleVar = "compact", style }) => {
  const { type, id, posterPath } = normData(media);

  const link = {
    view: "Details",
    params: { type, id },
  };

  return (
    <Container styleVar={styleVar} style={style}>
      <Link {...link}>
        <Image source={posterPath} resizeMode="cover" styleVar={styleVar} />
      </Link>

      {styleVar === "detailed" && <Info media={media} link={link} />}
    </Container>
  );
};

const normData = ({ name, id, poster_path }) => ({
  type: name ? "tv" : "movie",
  id,
  posterPath: normIMGPath(poster_path),
});

export default Card;
