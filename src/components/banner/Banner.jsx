import { Container, Wrapper, Image } from "./styles";
import PatternpadSvg from "../../assets/images/patternpad.svg";
import { viewWidth } from "../../utils";

const Banner = () => (
  <Container>
    {/* Create background */}
    {Array(2)
      .fill(null)
      .map((_, i) => (
        <PatternpadSvg
          key={i}
          width={viewWidth}
          height={200}
          style={{ position: "absolute", bottom: i === 1 ? -200 : 0 }}
        />
      ))}

    <Wrapper>
      <Image
        source={require("../../assets/images/logo.png")}
        resizeMode="contain"
      />
    </Wrapper>
  </Container>
);

export default Banner;
