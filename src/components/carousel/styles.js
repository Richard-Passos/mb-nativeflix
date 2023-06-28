import styled from "styled-components/native";
import { FontText } from "../../utils";

const Container = styled.View`
  gap: 16px;
`;

const Title = styled(FontText)`
  margin-left: 16px;

  font-size: ${({ theme }) => theme.sizes.lg}px;
  font-weight: bold;
`;

const FlatList = styled.FlatList`
  margin-horizontal: 16px;
`;

const Separator = styled.View`
  width: 16px;
`;

export { Container, Title, FlatList, Separator };
