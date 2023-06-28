/* Logic */
import styled from "styled-components/native";

/* Components */
import { FontText } from "../../utils";

const Container = styled.TouchableOpacity`
  left: 24px;
  bottom: -8px;
  z-index: 10;
`;

const Text = styled(FontText)`
  margin-right: auto;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.gray};
  padding-horizontal: 4px;
`;

export { Container, Text };
