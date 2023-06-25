/* Logic */
import { useState, useEffect } from "react";
import { mediasApi } from "../../assets/api";
import { MEDIAS_KEY } from "@env";

/* Components */
import { GoBack, List } from "../../components";

const Pagination = ({ route }) => {
  const [medias, setMedias] = useState([]),
    [page, setPage] = useState(1);

  const { type, section } = route.params;

  useEffect(() => {
    getMedias(type, section, page, setMedias, setMedias);
  }, [page]);

  return (
    <>
      <GoBack />

      <List data={medias} setPage={setPage} />
    </>
  );
};

const getMedias = (type, section, page, setMedias) =>
  mediasApi
    .get(`${type}/${section}?api_key=${MEDIAS_KEY}&language=en-US&page=${page}`)
    .then(({ data }) =>
      setMedias((prevState) =>
        page === 1 ? data.results : [...prevState, ...data.results]
      )
    );

export default Pagination;
