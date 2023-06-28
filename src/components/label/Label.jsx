/* Components */
import { Container, Text } from "./styles";

const Label = ({ forRef, children }) => (
  <Container onPress={() => forRef.current.focus()}>
    <Text>{children}</Text>
  </Container>
);

export default Label;
