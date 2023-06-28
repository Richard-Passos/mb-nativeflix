import styled from "styled-components/native";

const Container = styled.View`
  border-top-left-radius: 75px;
  padding: 24px;

  background-color: ${({ theme }) => theme.colors.bg};

  flex: 1;
  gap: 24px;
`;

export { Container };
