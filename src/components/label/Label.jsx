/* Components */
import { Container, Button } from "./styles";

const Label = ({ forRef, children }) => (
  <Container>
    <Button onPress={() => forRef.current.focus()} clear>
      {children}
    </Button>
  </Container>
);

export default Label;
