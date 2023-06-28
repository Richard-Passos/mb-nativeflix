import styled from "styled-components/native";

import { FontText } from "../../utils";

const Container = styled.TouchableOpacity`
  left: 24px;
  bottom: -8px;
  z-index: 10;
`;

const Text = styled(FontText)`
  margin-right: auto;
  padding-horizontal: 4px;

  background-color: ${({ theme }) => theme.colors.bg};

  color: ${({ theme }) => theme.colors.priText};
`;

export { Container, Text };
