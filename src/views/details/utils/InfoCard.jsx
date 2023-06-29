import { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { CardCon, Gap, Text, CardText } from "./styles";
import { Icon } from "react-native-elements";

const InfoCard = ({ data }) => {
  const { icon, title, text } = data;

  const theme = useContext(ThemeContext);

  return (
    <CardCon>
      <Icon
        name={icon.name}
        type={icon.type}
        size={32}
        color={theme.colors.opstTheme}
        style={{ marginRight: "auto" }}
      />

      <Gap>
        <Text>{title}</Text>

        <CardText>{text || "Not found"}</CardText>
      </Gap>
    </CardCon>
  );
};

export default InfoCard;
