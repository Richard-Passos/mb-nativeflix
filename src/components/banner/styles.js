import styled from "styled-components/native";
import { viewWidth } from "../../utils";
import { opacify } from "polished";

const Container = styled.View`
  width: ${viewWidth}px;
  height: 200px;

  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.View`
  width: 125px;
  height: 125px;

  border-radius: 125px;

  background-color: ${({ theme }) => opacify(-0.75, theme.colors.black)};

  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  width: 100px;
  height: 100px;
`;

export { Container, Wrapper, Image };
