import { useState, useEffect } from "react";
import { mediasApi } from "../../assets/api";
import { MEDIAS_KEY } from "@env";

import { Container, Types, Button } from "./styles";
import { View } from "react-native";
import { Carousel, Card } from "../../components";

const mediasToGet = [
  { type: "movie", section: "popular" },
  { type: "tv", section: "popular" },
  { type: "movie", section: "top_rated" },
  { type: "tv", section: "top_rated" },
  { type: "movie", section: "upcoming" },
];

const Home = () => {
  const [medias, setMedias] = useState([]),
    [mediasType, setMediasType] = useState("Multi");

  const types = ["Multi", "Movie", "Tv"];

  useEffect(() => {
    setMedias([]);

    getMedias(mediasToGet, mediasType, setMedias);
  }, [mediasType]);

  return (
    <Container>
      <Types>
        {types.map((text) => (
          <Button
            key={text}
            onPress={() => setMediasType(text)}
            clear
            isActive={text === mediasType}
          >
            {text}
          </Button>
        ))}
      </Types>

      <View style={{ gap: 32 }}>
        {medias.map(({ type, section, content }, i) => (
          <Carousel
            key={type + section + mediasType}
            title={`${section[0].toUpperCase() + section.substr(1)} ${type}s`}
            data={content}
            renItem={(item) => card(item, i)}
            keyExt={(item) => item.id}
            params={{ type, section }}
          />
        ))}
      </View>

      {/* Adding space on bottom page */}
      <View style={{ height: 32 }} />
    </Container>
  );
};

const getMedias = (mediasToGet, mediasType, setMedias) => {
  const requests = mediasToGet.filter(({ type }) =>
    mediasType === "Multi" ? true : type === mediasType.toLowerCase()
  );

  requests.forEach(({ type, section }) =>
    mediasApi
      .get(`${type}/${section}?api_key=${MEDIAS_KEY}&language=en-US`)
      .then(({ data }) =>
        setMedias((prevState) => [
          ...prevState,
          { type, section, content: data.results },
        ])
      )
  );
};

const card = (item, i) => (
  <Card media={item} styleVar={i === 0 ? "detailed" : "compact"} />
);

export default Home;
