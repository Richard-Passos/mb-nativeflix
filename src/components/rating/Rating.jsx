/* Logic */
import { useContext } from "react";
import { ThemeContext } from "styled-components/native";

/* Components */
import { Stars } from "./styles";
import { Icon } from "react-native-elements";

const starsNum = Array(5).fill("");

const Rating = ({ rating }) => {
  const theme = useContext(ThemeContext);

  return (
    <Stars>
      {starsNum.map((_, i) => (
        <Icon
          key={i}
          name="star"
          type="font-awesome"
          size={16}
          color={i + 1 <= rating && theme.colors.yellow}
        />
      ))}
    </Stars>
  );
};

export default Rating;
