/* Components */
import { Stars } from "./styles";
import { Icon } from "react-native-elements";

const starsNum = Array(5).fill("");

const Rating = ({ rating }) => (
  <Stars>
    {starsNum.map((_, i) => (
      <Icon
        key={i}
        name="star"
        type="font-awesome"
        size={16}
        color={i + 1 <= rating && "hsl(48, 85%, 50%)"}
      />
    ))}
  </Stars>
);

export default Rating;
