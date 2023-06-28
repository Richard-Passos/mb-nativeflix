import { Footer as Container, Text } from "./styles";
import Link from "../../link";

const Footer = ({ isLoginType, opstType }) => (
  <Container>
    <Text>
      {isLoginType ? "Don't have an account? " : "Already registered? "}
    </Text>

    <Link view={opstType}>{`${opstType}!`}</Link>
  </Container>
);

export default Footer;
