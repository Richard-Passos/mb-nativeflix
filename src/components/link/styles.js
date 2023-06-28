/* Logic */
import styled from "styled-components/native";

/* Components */
import { FontText } from "../../utils";

const Text = styled(FontText)`
  color: ${({ secondary, theme }) =>
    secondary ? theme.colors.priText : theme.colors.primary};
`;

export { Text };
