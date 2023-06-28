import { useMemo } from "react";
import { FlatList } from "./styles";
import Card from "../card";
import { View } from "react-native";

const List = ({ data, setPage /* hasChanged */ }) => {
  const memoData = useMemo(() => data, [data]);

  const renderItem = ({ item }) => (
    <Card media={item} style={{ marginBottom: 20 }} styleVar="detailed" />
  );
  const onEndReached = () => setPage((prevState) => ++prevState);

  return (
    <FlatList
      data={memoData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.4}
      /* Adding space on bottom page */
      ListFooterComponent={<View style={{ height: 32 }} />}
      /* TODO - extraData={hasChanged} */
    />
  );
};

export default List;
