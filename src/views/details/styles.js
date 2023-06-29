import styled from "styled-components/native";
import { viewWidth, viewHeight } from "../../utils";

const Hero = styled.ImageBackground`
  width: ${viewWidth}px;
  height: ${viewHeight * 0.45}px;

  background-color: ${({ theme }) => theme.colors.theme};
`;

export { Hero };
