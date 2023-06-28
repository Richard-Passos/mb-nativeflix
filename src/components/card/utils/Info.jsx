import { Container, Title, Text, Gap, BG } from "./styles";
import Rating from "../../rating";
import Link from "../../link";

const Info = ({ media, link }) => {
  const { title, rating, overview } = normalizeData(media);

  return (
    <>
      <Container>
        <Gap>
          <Title numberOfLines={1}>{title}</Title>

          <Rating rating={rating} />
        </Gap>

        <Link {...link}>
          <Text numberOfLines={6}>{overview}</Text>
        </Link>
      </Container>

      <BG />
    </>
  );
};

const normalizeData = ({ title, name, vote_average, overview }) => ({
  title: title ?? name,
  rating: Math.ceil(vote_average / 2) || 0,
  overview,
});

export default Info;
