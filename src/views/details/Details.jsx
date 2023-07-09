import { useState, useEffect } from "react";
import { mediasApi, MEDIAS_KEY } from "../../assets/api";
import { NotFound, GoBack, Footer, Loading } from "../../components";
import { ScrollView } from "react-native";
import { Image, Info } from "./utils";
import { normIMGPath, normRuntime, normDate } from "../../utils";

const Details = ({ route }) => {
  const [details, setDetails] = useState(null),
    [trailer, setTrailer] = useState(null),
    [error, setError] = useState(false);

  const normDetails = normData(details),
    { type, id } = route.params;

  useEffect(() => {
    getDetails(type, id, setError, setDetails, setTrailer);
  }, []);

  if (error) return <NotFound />;
  return details ? (
    <ScrollView>
      <GoBack />

      {details && (
        <>
          <Image source={normDetails.backdropPath} />

          <Info details={normDetails} trailer={trailer} />
        </>
      )}

      <Footer />
    </ScrollView>
  ) : (
    <Loading />
  );
};

const getDetails = async (type, id, setError, setDetails, setTrailer) => {
  const timeoutError = setTimeout(() => setError(true), 5000);

  const reqs = [
    mediasApi.get(`${type}/${id}?api_key=${MEDIAS_KEY}&language=en-US`),
    mediasApi.get(`${type}/${id}/videos?api_key=${MEDIAS_KEY}&language=en-US`),
  ];

  const [details, trailer] = await Promise.all(reqs)
    .then((values) => {
      clearTimeout(timeoutError);

      return values.map(({ data }) => data);
    })
    .catch(() => []);

  setDetails(details);

  const trailerVideo = trailer?.results.filter((el) =>
    el.name.match(/trailer/i)
  )[0];
  setTrailer(trailerVideo || trailer?.results[0]);
};

const normData = (details) => {
  if (details) {
    /* From movies */
    const { vote_average, title, release_date } = details;
    /* From tvs */
    const { name, episode_run_time, first_air_date } = details;
    /* From both */
    const { runtime, backdrop_path, overview, genres } = details;

    return {
      backdropPath: normIMGPath(backdrop_path),
      rating: Math.ceil(vote_average / 2) ?? 0,
      title: title || name,
      runtime: normRuntime(runtime ?? episode_run_time[0]),
      overview: overview || "Overview not found!",
      releaseDate: normDate(release_date ?? first_air_date),
      genre: genres[0]?.name,
    };
  }

  return {};
};

export default Details;
