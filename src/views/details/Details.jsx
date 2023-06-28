/* Logic */
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
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

  const { backdropPath, rating, title, overview, runtime, releaseDate, genre } =
    normalizeData(details);

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

  const { type, id } = route.params;

  useEffect(() => {
    getDetails(type, id, setDetails);
  }, []);

  return (
    <ScrollView>
      <GoBack />

      {details && <Hero source={{ uri: backdropPath }} resizeMode="cover" />}

      {details && (
        <Container>
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
            <FlatList
              style={{ marginTop: 8 }}
              data={extraInfo}
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

const normalizeData = (details) => {
  if (details) {
    const {
      backdrop_path,
      vote_average,
      name,
      title,
      overview,
      episode_run_time,
      first_air_date,
      release_date,
      genres,
    } = details;

    let { runtime = episode_run_time[0] } = details;

    /* Get format hours/minutes or minutes */
    const runtimeHour = Math.trunc(runtime / 60);
    runtime =
      runtime >= 60
        ? `${runtimeHour}h ${runtime - runtimeHour * 60}m`
        : `${runtime}m`;

    return {
      backdropPath: IMG_ORIGIN_PATH + backdrop_path,
      rating: Math.ceil(vote_average / 2) || 0,
      title: title || name,
      overview: overview,
      runtime,
      releaseDate: normalizeDate(release_date || first_air_date),
      genre: genres[0].name,
    };
  }

  return {};
};

export default Details;
