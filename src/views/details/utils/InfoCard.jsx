import { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { InfoContainer, InfoTitle, Gap, Info } from "./styles";
import { Icon } from "react-native-elements";

const InfoCard = ({ data }) => {
  const theme = useContext(ThemeContext);

  return (
    <InfoContainer>
      <Icon
        name={data.icon.name}
        type={data.icon.type}
        size={32}
        color={theme.colors.opstTheme}
        style={{ width: 32 }}
      />

      <Gap>
        <InfoTitle>{data.title}</InfoTitle>

        <Info>{data.info || ""}</Info>
      </Gap>
    </InfoContainer>
  );
};

export default InfoCard;
