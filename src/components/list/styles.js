import styled from "styled-components/native";

const FlatList = styled.FlatList`
  padding: 36px 16px;

  background-color: ${({ theme }) => theme.colors.bg};

  flex: 1;
`;

export { FlatList };
