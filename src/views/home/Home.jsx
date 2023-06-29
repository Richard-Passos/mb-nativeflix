import { useState, useEffect } from "react";
import { mediasApi, MEDIAS_KEY } from "../../assets/api";
import { Container, Gap, SpaceOnBottomPage } from "./styles";
import { Carousel, Card } from "../../components";

const mediasToGet = [
  { type: "movie", section: "popular" },
  { type: "tv", section: "popular" },
  { type: "movie", section: "top_rated" },
  { type: "tv", section: "top_rated" },
  { type: "movie", section: "upcoming" },
];

const Home = () => {
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    setMedias([]);

    getMedias(setMedias);
  }, []);

  return (
    <Container>
      <Gap>
        {medias.map(({ type, section, content }) => (
          <Carousel
            key={type + section}
            title={`${section[0].toUpperCase() + section.substr(1)} ${type}s`}
            data={content}
            renItem={(item) => card(item, section)}
            keyExt={(item) => item.id}
            params={{ type, section }}
            titleStyle={section === "popular" && { fontSize: 28 }}
          />
        ))}
      </Gap>

      <SpaceOnBottomPage />
    </Container>
  );
};

const getMedias = (setMedias) =>
  mediasToGet.forEach(({ type, section }) =>
    mediasApi
      .get(`${type}/${section}?api_key=${MEDIAS_KEY}&language=en-US`)
      .then(({ data }) =>
        setMedias((prevState) => [
          ...prevState,
          { type, section, content: data.results },
        ])
      )
  );

const card = (item, section) => (
  <Card
    media={item}
    styleVar={section === "popular" ? "detailed" : "compact"}
  />
);

export default Home;
