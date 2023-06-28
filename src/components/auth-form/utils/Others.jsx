import { Others as Container } from "./styles";
import Checkbox from "../../checkbox";
import Link from "../../link";

const Others = ({ handleRememberMe }) => (
  <Container>
    <Checkbox onPress={handleRememberMe}>Remember me</Checkbox>

    <Link view="Home">Forgot password?</Link>
  </Container>
);

export default Others;
