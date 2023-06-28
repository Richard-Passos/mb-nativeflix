/* Logic */
import styled from "styled-components/native";

const FlatList = styled.FlatList`
  padding: 16px 0px;
  background-color: ${({ theme }) => theme.colors.bg};

  flex: 1;
`;

export { FlatList };
