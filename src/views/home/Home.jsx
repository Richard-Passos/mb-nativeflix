import { useState, useEffect } from "react";
import { mediasApi, MEDIAS_KEY } from "../../assets/api";
import { ScrollView, View } from "react-native";
import { Greeting } from "./utils";
import { Carousel, Card, Footer, Loading } from "../../components";
import styles from "./styles";

const mediasToGet = [
  { type: "movie", section: "popular" },
  { type: "tv", section: "popular" },
  { type: "movie", section: "top_rated" },
  { type: "tv", section: "top_rated" },
  { type: "movie", section: "upcoming" },
];

const Home = () => {
  const [medias, setMedias] = useState([]);
  const [populars, others] = medias.reduce(
    (arr, media) => {
      arr[media.section === "popular" ? 0 : 1].push(media);
      return arr;
    },
    [[], []]
  );

  useEffect(() => {
    getMedias(setMedias);
  }, []);

  return medias.length === mediasToGet.length ? (
    <ScrollView style={styles.container}>
      <Greeting />

      <View style={styles.carousels}>
        {populars.map((media) => carousel(media, "detailed"))}

        {others.map((media) => carousel(media, "compact"))}
      </View>

      <Footer />

      {/* Add space on bottom page */}
      <View style={styles.height} />
    </ScrollView>
  ) : (
    <Loading />
  );
};

const getMedias = (setMedias) => {
  setMedias([]);

  mediasToGet.forEach(({ type, section }) =>
    mediasApi
      .get(`${type}/${section}?api_key=${MEDIAS_KEY}&language=en-US`)
      .then(({ data }) =>
        setMedias((state) => [
          ...state,
          { type, section, content: data.results },
        ])
      )
      .catch(() => setMedias([]))
  );
};

const carousel = ({ type, section, content }, styleVar) => (
  <Carousel
    key={type + section}
    title={`${section.capitalize()} ${type}s`}
    data={content}
    renItem={(item) => card(item, styleVar)}
    keyExt={(item) => item.id}
    params={{ type, section }}
  />
);

const card = (item, styleVar) => <Card media={item} styleVar={styleVar} />;

export default Home;
