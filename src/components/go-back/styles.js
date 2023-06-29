import styled from "styled-components/native";
import { opacify } from "polished";

const Container = styled.TouchableOpacity`
  width: 32px;

  border-radius: ${({ theme }) => theme.sizes.sm}px;
  padding: 4px;

  background-color: ${({ theme }) => opacify(-0.25, theme.colors.bg)};

  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 10;

  overflow: hidden;
`;

export { Container };
