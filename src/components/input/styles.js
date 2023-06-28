import styled from "styled-components/native";

const Container = styled.View`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.sizes.xl}px;
  padding: 8px 16px;

  flex-direction: row;
  align-items: center;
`;

const TextInput = styled.TextInput`
  color: ${({ theme }) => theme.colors.priText};

  flex: 1;
`;

const IconContainer = styled.View`
  position: absolute;
  right: 16px;
`;
export { Container, TextInput, IconContainer };
