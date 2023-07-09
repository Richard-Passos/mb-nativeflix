import { Text } from "react-native-paper";
import { View, FlatList } from "react-native";
import { ViewAll } from "./utils";
import styles from "./styles";

const Carousel = ({ renItem, keyExt, style, title, data, params }) => {
  const renderItem = ({ item }) => renItem(item);
  const keyExtractor = keyExt;
  const separator = <View style={{ width: 16 }} />;

  return (
    <View style={{ ...styles.Container, ...style }}>
      <Text style={{ fontWeight: "bold" }} variant="titleMedium">
        {title.replace(/[-_]/g, " ")}
      </Text>

      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={separator}
        ListFooterComponent={params && <ViewAll params={params} />}
        ListFooterComponentStyle={{ alignSelf: "flex-end" }}
      />
    </View>
  );
};

export default Carousel;
