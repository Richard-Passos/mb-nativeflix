/* Logic */
import { opacify } from "polished";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 200px;

  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.View`
  width: 125px;
  height: 125px;
  background-color: ${({ theme }) => opacify(-0.75, theme.colors.black)};
  border-radius: 125px;

  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  width: 100px;
  height: 100px;
`;

export { Container, Wrapper, Image };
