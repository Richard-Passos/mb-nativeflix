import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { encode } from "url-encode-decode";
import { mediasApi, MEDIAS_KEY } from "../../assets/api";
import { InputSearch } from "./utils";
import { List } from "../../components";

const Search = () => {
  const [medias, setMedias] = useState([]),
    [search, setSearch] = useState(""),
    [page, setPage] = useState(1),
    [loading, setLoading] = useState(false);

  const [debouncedSearch] = useDebounce(search, 500);

  const _getMediasparams = [debouncedSearch, page, setMedias, setLoading];

  useEffect(() => {
    setPage(1);
    getMedias(..._getMediasparams, "restart");
  }, [debouncedSearch]);

  /* Infinity scroll */
  useEffect(() => {
    getMedias(..._getMediasparams, "add");
  }, [page]);

  return (
    <>
      <InputSearch
        ph="Media title"
        value={search}
        onChange={setSearch}
        loading={loading}
      />

      <List data={medias} page={page} setPage={setPage} />
    </>
  );
};

const getMedias = (query, page, setMedias, setLoading, type) => {
  setLoading(true);

  const encondedQuery = encode(query);

  mediasApi
    .get(
      `search/multi?api_key=${MEDIAS_KEY}&language=en-US&page=${page}&query=${encondedQuery}`
    )
    .then(({ data }) => {
      type === "restart"
        ? setMedias(data.results)
        : setMedias((state) => [...state, ...data.results]);
    })
    .catch(() => setMedias([]))
    .finally(() => setLoading(false));
};

export default Search;
