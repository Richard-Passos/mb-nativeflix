/* Logic */
import styled from "styled-components/native";

/* Components */
import { FontText } from "../../utils";

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const Box = styled.View``;

const Text = styled(FontText)`
  color: ${({ theme }) => theme.colors.secText};
`;

export { Container, Box, Text };
