/* Components */
import { Container, Title, Info, Blur } from "./styles";
import { View } from "react-native";
import { Icon } from "react-native-elements";

const InfoCard = ({ data }) => (
  <Container>
    <Blur />

    <Icon
      name={data.icon.name}
      type={data.icon.type}
      size={data.icon.size}
      color={data.icon.color}
      style={{ width: 32 }}
    />

    <View style={{ gap: 4 }}>
      <Title>{data.title}</Title>

      <Info>{data.info || ""}</Info>
    </View>
  </Container>
);

export default InfoCard;
