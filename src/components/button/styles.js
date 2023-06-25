/* Logic */
import styled from "styled-components/native";

/* Components */
import { FontText } from "../../utils";

const Text = styled(FontText)`
  padding: 8px 16px;
  background-color: ${({ clear, theme }) =>
    clear ? "transparent" : theme.colors.primary};
  color: ${({ clear, theme }) =>
    clear ? theme.colors.primary : theme.colors.text};
  border: 1px solid transparent;
  border-radius: 20px;
  text-align: center;
`;

export { Text };
