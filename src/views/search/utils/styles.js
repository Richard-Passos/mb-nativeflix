import styled from "styled-components/native";

const Container = styled.View`
  padding: 16px;

  background-color: ${({ theme }) => theme.colors.bg};
`;

const IconCon = styled.View`
  padding: 30px 32px;

  position: absolute;

  pointer-events: none;
`;

export { Container, IconCon };
