/* Logic */
import { useMemo } from "react";

/* Components */
import { FlatList } from "./styles";
import Card from "../card";

const List = ({ data, setPage, hasChanged }) => {
  const dataMemo = useMemo(() => data, [data]);

  return (
    <FlatList
      data={dataMemo}
      renderItem={({ item }) => (
        <Card media={item} style={{ marginBottom: 20 }} />
      )}
      keyExtractor={(item) => item.id}
      onEndReached={() => setPage((prevState) => ++prevState)}
      onEndReachedThreshold={0.4}
      /* TODO - extraData={hasChanged} */
    />
  );
};

export default List;
