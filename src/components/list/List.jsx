import { useMemo } from "react";
import { FlatList, Text } from "./styles";
import Card from "../card";
import { View } from "react-native";

const List = ({ data, setPage }) => {
  const memoData = useMemo(() => data, [data]);

  const renderItem = ({ item }) => (
    <Card media={item} style={{ marginBottom: 20 }} styleVar="detailed" />
  );
  const onEndReached = () => setPage((prevState) => ++prevState);

  return memoData.length ? (
    <FlatList
      data={memoData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.4}
      /* Adding space on bottom page */
      ListFooterComponent={<View style={{ height: 16 }} />}
      contentContainerStyle={{ alignItems: "center" }}
    />
  ) : (
    <Text>"None media matched your query."</Text>
  );
};

export default List;
