import styled from "styled-components/native";
import { FontText } from "../../utils";

const FlatList = styled.FlatList`
  padding: 16px;

  background-color: ${({ theme }) => theme.colors.bg};

  flex: 1;
`;

const Text = styled(FontText)``;

export { FlatList, Text };
