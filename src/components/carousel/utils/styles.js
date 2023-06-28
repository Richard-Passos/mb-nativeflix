import styled from "styled-components/native";
import { viewWidth } from "../../../utils";
import { opacify } from "polished";

const ViewAll = styled.View`
  width: ${viewWidth * 0.35}px;
  height: 200px;

  margin-left: 16px;
  border-radius: ${({ theme }) => theme.sizes.xl}px;

  background-color: ${({ theme }) => opacify(-0.9, theme.colors.opstTheme)};

  bottom: 16px;

  justify-self: flex-end;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

export { ViewAll };
