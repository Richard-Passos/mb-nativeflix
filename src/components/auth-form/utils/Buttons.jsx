import { Buttons as Container, Button, Text } from "./styles";

const Buttons = ({ handleSubmit, states, type }) => (
  <Container>
    <Button onPress={() => handleSubmit(...states)}>{type}</Button>

    <Text>or</Text>

    <Button>Google</Button>
  </Container>
);

export default Buttons;
