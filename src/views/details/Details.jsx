import { useState, useEffect } from "react";
import { mediasApi, MEDIAS_KEY } from "../../assets/api";
import { ScrollView } from "react-native";
import { GoBack } from "../../components";
import { Hero } from "./styles";
import { Info } from "./utils";
import { normIMGPath, normRuntime, normDate } from "../../utils";

const Details = ({ route }) => {
  const [details, setDetails] = useState(null);

  const normDetails = normData(details);

  const { type, id } = route.params;

  useEffect(() => {
    getDetails(type, id, setDetails);
  }, []);

  return (
    <ScrollView>
      <GoBack />

      {details && (
        <>
          <Hero source={normDetails.backdropPath} resizeMode="cover" />

          <Info details={normDetails} />
        </>
      )}
    </ScrollView>
  );
};

const getDetails = async (type, id, setDetails) =>
  await mediasApi
    .get(`${type}/${id}?api_key=${MEDIAS_KEY}&language=en-US`)
    .then(({ data }) => setDetails(data));

const normData = (details) => {
  if (details) {
    /* From movies */
    const { vote_average, title, release_date } = details;
    /* From tvs */
    const { name, episode_run_time, first_air_date } = details;
    /* From both */
    const { runtime, backdrop_path, overview, genres } = details;

    /* Normalizing and returning */
    return {
      backdropPath: normIMGPath(backdrop_path),
      rating: Math.ceil(vote_average / 2) || 0,
      title: title || name,
      overview: overview || "Overview not found!",
      runtime: normRuntime(runtime || episode_run_time[0]),
      releaseDate: normDate(release_date || first_air_date),
      genre: genres[0].name,
    };
  }

  return {};
};

export default Details;
