import { useState, useEffect } from "react";
import { mediasApi, MEDIAS_KEY } from "../../assets/api";
import { GoBack, List } from "../../components";

const Pagination = ({ route }) => {
  const [medias, setMedias] = useState([]),
    [page, setPage] = useState(1);

  const { type, section } = route.params;

  useEffect(() => {
    getMedias(type, section, page, setMedias);
  }, [page]);

  return (
    <>
      <GoBack />

      <List data={medias} page={page} setPage={setPage} />
    </>
  );
};

const getMedias = (type, section, page, setMedias) =>
  mediasApi
    .get(`${type}/${section}?api_key=${MEDIAS_KEY}&language=en-US&page=${page}`)
    .then(({ data }) =>
      setMedias((state) =>
        page === 1 ? data.results : [...state, ...data.results]
      )
    )
    .catch(() => setMedias([]));

export default Pagination;
