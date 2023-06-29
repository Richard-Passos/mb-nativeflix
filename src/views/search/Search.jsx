import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { encode } from "url-encode-decode";
import { mediasApi, MEDIAS_KEY } from "../../assets/api";
import { InputSearch } from "./utils";
import { List } from "../../components";

const Search = () => {
  const [medias, setMedias] = useState([]),
    [search, setSearch] = useState(""),
    [page, setPage] = useState(1);

  const [debouncedSearch] = useDebounce(search, 500);

  const handleSearch = (text) => {
    setSearch(text);
    setPage(1);
  };

  useEffect(() => {
    getMedias(debouncedSearch, 1, "restart", setMedias);
  }, [debouncedSearch]);

  useEffect(() => {
    /* Infinity scroll */
    getMedias(debouncedSearch, page, "add", setMedias);
  }, [page]);

  return (
    <>
      <InputSearch handleSearch={handleSearch} />

      <List data={medias} setPage={setPage} />
    </>
  );
};

const getMedias = (query, page, type, setMedias) => {
  const encondedQuery = encode(query);

  mediasApi
    .get(
      `search/multi?api_key=${MEDIAS_KEY}&language=en-US&page=${page}&query=${encondedQuery}`
    )
    .then(({ data }) =>
      type === "restart"
        ? setMedias(data.results)
        : setMedias((prevState) => [...prevState, ...data.results])
    );
};

export default Search;
