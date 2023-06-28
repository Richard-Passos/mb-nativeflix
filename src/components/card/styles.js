import styled from "styled-components/native";

import { viewWidth } from "../../utils";

const Container = styled.View`
  ${({ styleVar }) =>
    styleVar === "detailed" && `width: ${viewWidth * 0.91}px`};

  margin-bottom: 16px;

  flex-direction: row;
  align-items: flex-end;
`;

const Image = styled.Image`
  width: ${viewWidth * 0.35}px;
  height: 200px;

  margin-bottom: ${({ styleVar }) => (styleVar === "detailed" ? 16 : 0)}px;
  margin-left: ${({ styleVar }) => (styleVar === "detailed" ? 16 : 0)}px;
  border-radius: ${({ styleVar, theme }) =>
    styleVar === "detailed" ? theme.sizes.xs : theme.sizes.md}px;
`;

export { Container, Image };
