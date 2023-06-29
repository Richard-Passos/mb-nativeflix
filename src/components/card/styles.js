import styled from "styled-components/native";

import { viewWidth } from "../../utils";

const Container = styled.View`
  width: ${({ styleVar }) =>
    styleVar === "detailed" ? `${viewWidth * 0.91}px` : "auto"};

  margin-bottom: 8px;

  flex-direction: row;
  align-items: flex-end;
`;

const Image = styled.Image`
  width: ${viewWidth * 0.35}px;
  height: ${viewWidth * 0.5}px;

  margin-bottom: ${({ styleVar }) => (styleVar === "detailed" ? 16 : 0)}px;
  margin-left: ${({ styleVar }) => (styleVar === "detailed" ? 16 : 0)}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.bg};
  border-radius: ${({ styleVar, theme }) =>
    styleVar === "detailed" ? theme.sizes.xs : theme.sizes.md}px;

  background-color: ${({ theme }) => theme.colors.theme};
`;

export { Container, Image };
