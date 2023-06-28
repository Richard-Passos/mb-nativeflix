/* Logic */
import styled from "styled-components/native";
import { opacify } from "polished";

const Container = styled.TouchableOpacity`
  width: 32px;
  padding: 4px;
  background-color: ${({ theme }) => opacify(-0.25, theme.colors.bg)};
  border-radius: ${({ theme }) => theme.sizes.xs}px;
  overflow: hidden;

  position: absolute;
  top: 32px;
  left: 8px;
  z-index: 10;
`;

export { Container };
