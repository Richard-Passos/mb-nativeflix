/* Logic */
import { useContext } from "react";
import { ThemeContext } from "styled-components/native";

/* Components */
import { Container, Title, Info, Gap } from "./styles";
import { Icon } from "react-native-elements";

const InfoCard = ({ data }) => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <Icon
        name={data.icon.name}
        type={data.icon.type}
        size={32}
        color={theme.colors.opstTheme}
        style={{ width: 32 }}
      />

      <Gap>
        <Title>{data.title}</Title>

        <Info>{data.info || ""}</Info>
      </Gap>
    </Container>
  );
};

export default InfoCard;
