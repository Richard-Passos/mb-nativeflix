import styled from "styled-components/native";
import { FontText } from "../../utils";

const Text = styled(FontText)`
  color: ${({ secondary, theme }) =>
    secondary ? theme.colors.priText : theme.colors.primary};
  ${({ secondary }) => secondary && "font-weight: bold;"};
`;

export { Text };
