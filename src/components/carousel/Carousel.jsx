import { Container, Title, FlatList, Separator } from "./styles";
import { ViewAll } from "./utils";

const Carousel = (props) => {
  const { title, data, renItem, keyExt, params, titleStyle, style } = props;

  const renderItem = ({ item }) => renItem(item);
  const keyExtractor = (item) => keyExt(item);
  const separator = () => <Separator />;

  return (
    <Container>
      <Title style={titleStyle}>{title.replace(/[-_]/g, " ")}</Title>

      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={separator}
        ListFooterComponent={params && <ViewAll params={params} />}
        ListFooterComponentStyle={{ alignSelf: "flex-end" }}
        style={style}
      />
    </Container>
  );
};

export default Carousel;
