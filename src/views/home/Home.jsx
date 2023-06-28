/* Logic */
import { useState, useEffect } from "react";
import { mediasApi } from "../../assets/api";
import { MEDIAS_KEY } from "@env";

/* Components */
import { Container, Types, Button, ViewAll, Title } from "./styles";
import { View, FlatList } from "react-native";
import { Card, Link } from "../../components";

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
          <View key={type + section} style={{ gap: 16 }}>
            <Title>
              {`${
                section[0].toUpperCase() + section.substr(1)
              } ${type}s`.replace(/[-_]/g, " ")}
            </Title>

            <FlatList
              horizontal
              data={content}
              style={{ marginHorizontal: 16 }}
              renderItem={({ item }) => (
                <Card
                  media={item}
                  styleVar={i === 0 ? "detailed" : "compact"}
                />
              )}
              ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
              keyExtractor={(item) => item.id}
              ListFooterComponent={
                <ViewAll>
                  <Link
                    view={"Pagination"}
                    params={{ type, section }}
                    style={{ fontWeight: "bold" }}
                    secondary
                  >
                    View all
                  </Link>
                </ViewAll>
              }
              ListFooterComponentStyle={{ alignSelf: "flex-end" }}
            />
          </View>
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

export default Home;
