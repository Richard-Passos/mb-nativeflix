import { useState, useEffect } from "react";
import { mediasApi } from "../../assets/api";
import { MEDIAS_KEY } from "@env";
import { ScrollView } from "react-native";
import { GoBack } from "../../components";
import { Hero } from "./styles";
import { Text } from "./utils";
import { IMG_ORIGIN_PATH, normalizeDate } from "../../utils";

const Details = ({ route }) => {
  const [details, setDetails] = useState(null);

  const { backdropPath } = normalizeData(details);

  const { type, id } = route.params;

  useEffect(() => {
    getDetails(type, id, setDetails);
  }, []);

  return (
    <ScrollView>
      <GoBack />

      {details && <Hero source={{ uri: backdropPath }} resizeMode="cover" />}

      {details && <Text details={normalizeData(details)} />}
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
