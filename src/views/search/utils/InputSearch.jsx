import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Icon } from "react-native-elements";
import { Input } from "../../../components";

const InputSearch = ({ handleSearch }) => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <IconCon>
        <Icon
          name="search"
          type="font-awesome"
          size={16}
          color={theme.colors.priText}
          style={{ pointerEvents: "none" }}
        />
      </IconCon>

      <Input
        placeholder="Media title"
        setState={handleSearch}
        style={{ paddingHorizontal: 24 }}
      />

      <IconCon>
        {/* <Icon name="x" type="font-awesome-5" size={13} /> */}
      </IconCon>
    </Container>
  );
};

export default InputSearch;
