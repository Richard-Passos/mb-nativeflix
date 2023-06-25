/* Logic */
import { useState, useEffect } from "react";
import { mediasApi } from "../../assets/api";
import { MEDIAS_KEY } from "@env";
import { IMG_ORIGIN_PATH, normalizeDate } from "../../utils";

/* Components */
import { ScrollView, FlatList } from "react-native";
import { GoBack, Rating } from "../../components";
import { Hero, Container, RatingContainer, Title, Overview } from "./styles";
import { Icon } from "react-native-elements";
import { InfoCard } from "./utils";

const Details = ({ route }) => {
  const [details, setDetails] = useState(null);

  const { type, id } = route.params;

  useEffect(() => {
    getDetails(type, id, setDetails);
  }, []);

  return (
    <ScrollView>
      <GoBack />

      {details && (
        <Hero
          source={{ uri: IMG_ORIGIN_PATH + details.backdrop_path }}
          resizeMode="cover"
        />
      )}

      {details && (
        <Container>
          <RatingContainer>
            <Rating rating={Math.ceil(details.vote_average / 2) ?? 0} />

            <Icon
              name="heart"
              type="font-awesome"
              size={16}
              color="hsl(341, 100%, 50%)"
            />
          </RatingContainer>

          <Title>{details.title || details.name}</Title>

          {/* "\t" is replacing text-indent on css */}
          <Overview>{"\t" + details.overview}</Overview>

          {details && (
            /* TODO - Organize */
            <FlatList
              style={{ marginTop: 8 }}
              data={[
                {
                  icon: {
                    name: "progress-clock",
                    type: "material-community",
                    size: 32,
                    color: "hsl(0, 0%, 85%)",
                  },
                  title: "Duration",
                  info: details.runtime + "m",
                },
                {
                  icon: {
                    name: "calendar-month",
                    type: "material-community",
                    size: 32,
                    color: "hsl(0, 0%, 85%)",
                  },
                  title: "Release",
                  /* Get format YYYY   */
                  info: details.release_date.match(/^\d{4}/),
                },
                {
                  icon: {
                    name: "drama-masks",
                    type: "material-community",
                    size: 32,
                    color: "hsl(0, 0%, 85%)",
                  },
                  title: "Genre",
                  info: details.genres[0].name,
                },
              ]}
              horizontal
              renderItem={({ item }) => <InfoCard data={item} />}
              keyExtractor={(item) => item.title}
            />
          )}
        </Container>
      )}
    </ScrollView>
  );
};

const getDetails = async (type, id, setDetails) =>
  await mediasApi
    .get(`${type}/${id}?api_key=${MEDIAS_KEY}&language=en-US`)
    .then(({ data }) => setDetails(data));

export default Details;
