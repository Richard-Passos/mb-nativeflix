/* Components */
import { Container, Wrapper, Image } from "./styles";
import PatternpadSvg from "../../assets/images/patternpad.svg";

const Banner = () => (
  <Container>
    <PatternpadSvg width="100%" height={200} style={{ position: "absolute" }} />
    {/* Complete empty background */}
    <PatternpadSvg
      width="100%"
      height={200}
      style={{ position: "absolute", bottom: -200 }}
    />
    {/*  */}

    <Wrapper>
      <Image
        source={require("../../assets/images/logo.png")}
        resizeMode="contain"
      />
    </Wrapper>
  </Container>
);

export default Banner;
