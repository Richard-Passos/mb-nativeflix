import { useMemo } from "react";
import { withTheme, Text } from "react-native-paper";
import { FlatList, View } from "react-native";
import Card from "../card";
import styles from "./styles";

const List = ({ data, page, setPage, theme }) => {
  const memoData = useMemo(() => data, [data]);

  const renderItem = ({ item }) => (
    <Card media={item} styleVar="detailed" style={{ marginBottom: 20 }} />
  );
  const keyExtractor = (item) => item.id + page;
  const onEndReached = () => setPage((state) => ++state);

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.background }}
    >
      {memoData.length ? (
        <FlatList
          data={memoData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.4}
        />
      ) : (
        <Text variant="titleMedium">None media matched your query.</Text>
      )}
    </View>
  );
};

export default withTheme(List);
