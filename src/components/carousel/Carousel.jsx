import { Container, Title, FlatList, Separator } from "./styles";
import { ViewAll } from "./utils";

const Carousel = (props) => {
  const { title, data, renItem, keyExt, viewAll = true, params } = props;

  const renderItem = ({ item }) => renItem(item);
  const keyExtractor = (item) => keyExt(item);
  const separator = () => <Separator />;

  return (
    <Container>
      <Title>{title.replace(/[-_]/g, " ")}</Title>

      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={separator}
        ListFooterComponent={viewAll && <ViewAll params={params} />}
        ListFooterComponentStyle={{ alignSelf: "flex-end" }}
      />
    </Container>
  );
};

export default Carousel;
