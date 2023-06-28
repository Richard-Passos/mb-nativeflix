import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { encode } from "url-encode-decode";
import { mediasApi } from "../../assets/api";
import { MEDIAS_KEY } from "@env";

import { InputSearch } from "./styles";
import { Icon } from "react-native-elements";
import { Input, List } from "../../components";

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
    getMedias(debouncedSearch, 1).then(({ data }) => setMedias(data.results));
  }, [debouncedSearch]);

  useEffect(() => {
    getMedias(debouncedSearch, page).then(({ data }) =>
      setMedias((prevState) => [...prevState, ...data.results])
    );
  }, [page]);

  return (
    <>
      <InputSearch>
        <Icon name="search" type="font-awesome" size={16} />
        <Input placeholder="Media title" onChange={handleSearch} />
        <Icon name="x" type="font-awesome" size={13} />
      </InputSearch>

      <List data={medias} setPage={setPage} />
    </>
  );
};

const getMedias = (query, page) => {
  const encondedQuery = encode(query);

  return mediasApi.get(
    `search/multi?api_key=${MEDIAS_KEY}&language=en-US&page=${page}&query=${encondedQuery}`
  );
};

export default Search;
